import React, { useEffect, useState, useCallback } from "react"

const QuantityController = ({
  id,
  min,
  max,
  defaultValue,
  quantityCount,
  onChange,
  onIncrease,
  onDecrease,
  sizeName,
}) => {
  const [value, setValue] = useState(quantityCount)
  // console.log(onChange)

  useEffect(() => {
    onChange && onChange(value)
  }, [value])

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const decreaseValue = useCallback(() => {
    // console.log("Decreased")

    if (min && value <= min) {
      return
    } else {
      if (value <= 1) {
        return
      }
      onDecrease && onDecrease()
      setValue(value - 1)
      // console.log(value - 1)
    }
  }, [value])

  const increaseValue = useCallback(() => {
    if (value >= max) {
      return
    }
    onIncrease && onIncrease()
    setValue(value + 1)
    // console.log(value + 1)
  }, [value])

  return (
    <div className="variation-input">
      <button
        onClick={decreaseValue}
        disabled={value <= min || value <= 1}
        className="dec qtybutton"
      >
        -
      </button>
      <input
        id="bhotahitiId"
        type="text"
        name={sizeName}
        value={value}
        onChange={onChange}
        readOnly
        maxLength="4"
      />
      <button onClick={increaseValue} disabled={value >= max} className="inc qtybutton">
        +
      </button>
    </div>
  )
}

export default React.memo(QuantityController)
