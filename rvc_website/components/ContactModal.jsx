import React from 'react'

export default function ContactModal() {
  return (
    <div className="modal-box">
        <h3 className="font-bold text-lg" class="text-black">Hello!</h3>
        <p className="py-4" class="text-black">Press ESC key or click the button below to close</p>
        <div className="modal-action">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            </form>
        </div>
    </div>
  )
}
