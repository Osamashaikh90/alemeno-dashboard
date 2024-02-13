// import React from 'react'

export const DateFormatter = (dateString) => {
    const [datePart, _] = dateString.split(","); // Split date and time parts
    const [day, month, year] = datePart.split("/").map(Number); // Extract day, month, and year
    const currentDate = new Date(year, month - 1, day); // Create Date object without time
    currentDate.setFullYear(currentDate.getFullYear() + 2); // Add 2 years
    return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
}

