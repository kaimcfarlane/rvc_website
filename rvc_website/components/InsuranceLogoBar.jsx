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
        <div className="collapse bg-white">
            <input type="checkbox" /> 
            <div className="collapse-title leading-7 p-[1.4vw] min-h-[0] h-[4vw] text-[1.4vw] text-white bg-primary text-center font-medium">
                View Accepted Insurance Providers
            </div>
            <div className="collapse-content shadow-xl"> 
                <div class='flex justify-around'>
                    <Image class='w-[75px] h-[50px]' src={BCBS_logo} alt='BCBS_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={Humana_logo} alt='Humana_logo'></Image>
                    <Image class='w-[120px] h-[50px]' src={Solstice_logo} alt='Solstice_logo'></Image>
                    <Image class='w-[175px] h-[50px]' src={Spectera_logo} alt='Spectera_logo'></Image>
                    <Image class='w-[75px] h-[50px]' src={EyeMedVision_logo} alt='Humana_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={Surperior_logo} alt='Solstice_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={UnitedHealthCare_logo} alt='Spectera_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={Vsp_logo} alt='Spectera_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={Davis_logo} alt='Spectera_logo'></Image>
                    <Image class='w-[125px] h-[50px]' src={Cigna_logo} alt='Spectera_logo'></Image>
                </div>
            </div>
        </div>
    </>
  )
}
