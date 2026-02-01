import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="fcard col-md-4">
                    <h3>Location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="fcard col-md-4">
                    <h3>Around the Web</h3>
                </div>
                <div className="fcard col-md-4">
                    <h3>About freelancer</h3>
                    <p>
                        Freelance is a free to use,
                        licensed Bootstrap theme created by Route
                    </p>
                </div>
            </div>
        </div>
      </div>

      <div className="copyright">
        <p className='m-0'>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
