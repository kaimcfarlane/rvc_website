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

export default function InsuranceLogoBar() {
  return (
    <>
        <div class='flex justify-around'>
            <Image class='w-[100px] h-[75px]' src={BCBS_logo} alt='BCBS_logo'></Image>
            <Image class='w-[150px] h-[75px]' src={Humana_logo} alt='Humana_logo'></Image>
            <Image class='w-[150px] h-[75px]' src={Solstice_logo} alt='Solstice_logo'></Image>
            <Image class='w-[200px] h-[75px]' src={Spectera_logo} alt='Spectera_logo'></Image>
            <Image class='w-[100px] h-[75px]' src={EyeMedVision_logo} alt='Humana_logo'></Image>
            <Image class='w-[150px] h-[75px]' src={Surperior_logo} alt='Solstice_logo'></Image>
            <Image class='w-[150px] h-[75px]' src={UnitedHealthCare_logo} alt='Spectera_logo'></Image>
            <Image class='w-[150px] h-[75px]' src={Vsp_logo} alt='Spectera_logo'></Image>
        </div>
    </>
  )
}
