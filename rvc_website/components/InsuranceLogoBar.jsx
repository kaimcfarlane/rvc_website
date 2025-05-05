import React from 'react'
import Image from 'next/image'
import BCBS_logo from '../public/gen_icons/blueCrossBlueShield_insurance_logo.jpg'
import Humana_logo from '../public/gen_icons/humana_insurance_logo.png'
import Solstice_logo from '../public/gen_icons/solstice_insurance_logo.jpg'
import Spectera_logo from '../public/gen_icons/spectera_insurance_logo.jpg'
import EyeMedVision_logo from '../public/gen_icons/eyeMedVisionCare_insurance_logo.jpeg'
import Surperior_logo from '../public/gen_icons/superiorVision_insurance_logo.png'
import UnitedHealthCare_logo from '../public/gen_icons/unitedHealthCare_insurance_logo.webp'
import Vsp_logo from '../public/gen_icons/vsp_insurance_logo.png'
import Davis_logo from '../public/gen_icons/davisVision_insurance_logo.webp'
import Cigna_logo from '../public/gen_icons/cigna_insurance_logo.png'


export default function InsuranceLogoBar() {
  return (
    <>
        <button onClick={()=>document.getElementById('insurances_modal').showModal()} className="btn w-[17vw] h-[2.5vw] btn-primary text-white text-[1vw] normal-case font-normal">View Supported Insurances</button>
        <dialog id="insurances_modal" className="modal">
            <div className="modal-box max-w-[100vw] max-h-[100vw] w-[38vw]">
                <div className='flex flex-col justify-around'>
                    <div className='flex flex-row ml-[2vw] justify-center'>
                        <Image className='w-[5.7vw] h-[5.7vw] mr-[2vw]' src={BCBS_logo} alt='BCBS_logo'></Image>
                        {/* <Image className='w-[10vw] h-[6vw] mr-[1vw]' src={Humana_logo} alt='Humana_logo'></Image> */}
                        <Image className='w-[10vw] h-[8vw] mr-[2vw]' src={EyeMedVision_logo} alt='Humana_logo'></Image>
                        <Image className='w-[10vw] h-[5vw]' src={Solstice_logo} alt='Solstice_logo'></Image>
                    </div>
                    <div className='flex items-center justify-center mb-[0.7vw]'>
                        <Image className='w-[10vw] h-[6vw] mr-[1vw]' src={Surperior_logo} alt='Solstice_logo'></Image>
                        <Image className='w-[13vw] h-[3vw] mr-[1vw]' src={Spectera_logo} alt='Spectera_logo'></Image>
                        <Image className='w-[10vw] h-[6vw]' src={Cigna_logo} alt='Spectera_logo'></Image>
                    </div>
                    <div className='flex mb-[0.7vw] justify-center'>
                        <Image className='w-[10vw] h-[6vw] mr-[1vw]' src={UnitedHealthCare_logo} alt='Spectera_logo'></Image>
                        <Image className='w-[10vw] h-[5.7vw] mr-[1vw]' src={Vsp_logo} alt='Spectera_logo'></Image>
                        <Image className='w-[10vw] h-[6vw]' src={Davis_logo} alt='Spectera_logo'></Image>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
  )
}
