import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { ACTIVE_PROFILE } from '../config/business'

const emptyForm = {
  serviceId: '',
  serviceName: '',
  barberId: '',
  barberName: '',
  date: '',
  time: '',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  notes: '',
}

export function useBooking() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const prefillService = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceId: service.id,
      serviceName: service.name,
    }))
  }

  const prefillBarber = (barber) => {
    setFormData((prev) => ({
      ...prev,
      barberId: barber.id,
      barberName: barber.name,
    }))
  }

  const prefillTime = (time) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const submitBooking = async () => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      // Upsert customer record (deduplicate by phone)
      await supabase.from('customers').upsert(
        {
          name: formData.customerName,
          phone: formData.customerPhone,
          email: formData.customerEmail || null,
        },
        { onConflict: 'phone' }
      )

      // Insert booking
      const { error } = await supabase.from('bookings').insert({
        customer_name: formData.customerName,
        customer_phone: formData.customerPhone,
        customer_email: formData.customerEmail || null,
        service_id: formData.serviceId || null,
        service_name: formData.serviceName,
        barber_id: formData.barberId || null,
        barber_name: formData.barberName || 'No preference',
        booking_date: formData.date,
        booking_time: formData.time,
        profile: ACTIVE_PROFILE,
      })

      if (error) throw error
      setStatus('success')
    } catch (err) {
      console.error('Booking error:', err)
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const reset = () => {
    setFormData(emptyForm)
    setStatus('idle')
    setErrorMessage('')
  }

  return {
    formData,
    updateField,
    prefillService,
    prefillBarber,
    prefillTime,
    submitBooking,
    status,
    errorMessage,
    reset,
  }
}
