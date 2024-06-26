import React from 'react'

export default function FormatPrice(props) {

  const {
		price 
	} = props

  return Intl.NumberFormat("en-IN",{
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 2
	}).format(price / 100)
}
