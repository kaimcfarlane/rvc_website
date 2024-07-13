import React from 'react'
import Image from 'next/image'
import DocPatient_pic2 from '../public/rvc_glasses/doc_patient2.jpg'
import DocPatient_pic3 from '../public/rvc_glasses/doc_patient1.jpg'
import ContactsRoom_pic1 from '../public/rvc_office/rvc_contactcenter3.jpg'
import RVCGlassesRoom_pic1 from '../public/rvc_glasses/rvc_glasseswall2.jpg'
import BlueRectangle from '../public/gen_icons/blue_rectangle_background.png'
import Gucci_Logo from '../public/gen_icons/gucci_logo_1.svg'
import Prada_Logo from '../public/gen_icons/prada_logo_1.svg'
import Armani_Logo from '../public/gen_icons/armani_logo_3.svg'
import Burberry_Logo from '../public/gen_icons/burberry_logo_1.svg'
import CalvinClien_Logo from '../public/gen_icons/calvinklien_logo_1.svg'
import Coach_Logo from '../public/gen_icons/coach_logo_2.svg'
import DocleAndGabbana_Logo from '../public/gen_icons/docleandgabbanna_logo_1.svg'
import Versace_Logo from '../public/gen_icons/versace_logo_1.svg'
import Lacoste_Logo from '../public/gen_icons/lacoste_logo_1.svg'
import Oakley_Logo from '../public/gen_icons/oakley_logo_2.png'
import MCM_Logo from '../public/gen_icons/mcm_logo_1.png'
import Guess_Logo from '../public/gen_icons/guess_logo_1.svg'
import RayBan_Logo from '../public/gen_icons/rayban_logo_1.svg'
import GreenRectangleBanner from '@/components/GreenRectangleBanner'

export default function ServicesPage() {
  return (
    <>
        <section class="h-[100vh] w-[100%] absolute">
        <div class="absolute font-<K2D> text-[7vh] w-[100%] flex justify-center top-[15%]">
            <div class="text-black">Our <mark class="text-primary bg-transparent">Services</mark></div>
        </div>
        <div>
            <Image src={BlueRectangle} class="w-[40%] h-[50%] z-1 absolute top-[29%] left-[55.7%]" alt='BlueRectagneBackground'></Image>
            <Image src={DocPatient_pic2} class="w-[40%] h-[50%] z-1 absolute top-[27.7%] left-[55%] brightness-125" alt='DocPatientPic2'></Image>
        </div>
        <div class='w-[30%] h-[50%] p-[20px] static ml-[10%] mt-[16%] rounded-md justify-center'>
            <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                <div class="flex flex-row pb-[0.75vh] w-[100%] justify-left">
                <div class="mr-[2%] text-secondary text-[4.2vh] leading-10">Eye Exams</div>
                </div>
                <div class="flex flex-col w-[100%] justify-left mb-[1.2vh]">
                    <div class="text-[2.1vh] leading-7 mb-[1.2vh]">Regardless of your age or health, it’s important to have regular eye exams.</div>
                    <div class="text-[2.1vh] leading-7">We examine, treat, and diagnose:</div>
                </div>
                <div class="flex flex-row w-[100%] justify-left text-[2.1vh] ml-[7%]">
                    <ul class="list-disc">
                        <li>Nearsightedness</li>
                        <li>Farsightedness</li>
                        <li>Astigmatism</li>
                        <li>Presbyopia</li>
                        <li>Glaucoma</li>
                        <li>Cataracts</li>
                        <li>Retinal Diseases</li>
                        <li>Hypertension</li>
                        <li>Diabetes</li>
                    </ul>
                </div>
            </div>
        </div>
        <GreenRectangleBanner text={"During a complete eye exam, in addition to checking for changes in your vision and updating your prescription, Dr. Reese will also assess the overall health of your eyes."}></GreenRectangleBanner>
        </section>
        <section class="top-[100%] h-[100vh] w-[100%] absolute">
            <div>
                <Image src={BlueRectangle} class="w-[42%] h-[47%] z-1 absolute top-[16.3%] left-[10.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={DocPatient_pic3} class="w-[42%] h-[47%] z-1 absolute top-[15%] left-[10%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[63%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[1.2vh] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-[4.2vh] leading-10">Pediatric Exams</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[1.2vh]">
                        <div class="text-[2.1vh] leading-7 mb-[1.2vh]">Approximately 25% of school-aged children have vision problems. All children should have a comprehensive eye exam before age 3.  It is very important for parents to know that vision screenings performed at school or by a pediatrician are not substitutes for a comprehensive eye exam.  At Reese Vision Care, we see children age 3 years and older.</div>
                    </div>
                </div>
            </div>
            <GreenRectangleBanner text={"We have lots of frames that look cool and fit well so kids actually love their glasses! We use durable products and safe polycarbonate lenses.  We also offer contact lenses for children.  Disposable contact lenses are safer and more convenient making them a great option for kids, especially for sports and other activities."}></GreenRectangleBanner>
        </section>
        <section class="top-[200%] h-[100vh] w-[100%] absolute">
            <div>
                <Image src={BlueRectangle} class="w-[41%] h-[43%] z-1 absolute top-[16.3%] left-[55.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={ContactsRoom_pic1} class="w-[41%] h-[43%] z-1 absolute top-[15%] left-[55%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[10%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[1.2vh] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-[4.2vh] leading-10">Contact Lenses</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[1.2vh]">
                        <div class="text-[2.1vh] leading-7 mb-[1.2vh]">Dr. Reese is a contact lens specialist.  Dr. Reese fits contact lenses of all types, including color lenses, lenses for astigmatism, and multi-focal lenses. Whether you prefer daily, weekly or monthly disposables, we provide a wide selection of contact lenses to fit your needs. </div>
                    </div>
                </div>
            </div>
            <GreenRectangleBanner text={"We have lots of frames that look cool and fit well so kids actually love their glasses! We use durable products and safe polycarbonate lenses.  We also offer contact lenses for children.  Disposable contact lenses are safer and more convenient making them a great option for kids, especially for sports and other activities."}></GreenRectangleBanner>
            </section>
        <section class="top-[300%] h-[100vh] w-[100%] absolute">
            <div>
                <Image src={BlueRectangle} class="w-[40%] h-[46.5%] z-1 absolute top-[16.3%] left-[10.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={RVCGlassesRoom_pic1} class="w-[40%] h-[46.5%] z-1 absolute top-[15%] left-[10%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[63%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[1.2vh] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-[4.2vh] leading-10">Eyewear</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[1.2vh]">
                        <div class="text-[2.1vh] leading-7 mb-[1.2vh]">A pair of glasses isn’t just about having great sight, it’s about looking great too. We offer a complete optical showroom with quality eyewear for every lifestyle and budget.  Our knowledgeable and friendly staff will help you choose the perfect eyewear for you!</div>
                        <button onClick={()=>document.getElementById('brands_modal').showModal()} className="btn btn-wide btn-primary text-white font-<K2D> text-[1.95vh] leading-7 h-[2.7vw] min-h-0 normal-case font-normal">View Supported Brands</button>
                        <dialog id="brands_modal" className="modal">
                        <div className="modal-box flex flex-col items-center w-[36vw] max-w-[100rem]">
                            <div class="flex mr-[20%]">
                                <Image class="mr-[4%] w-[6.5vw] h-[6.5vw]" src={Gucci_Logo}></Image>
                                <Image class="mr-[5%] w-[6.5vw] h-[6.5vw]" src={Prada_Logo}></Image>
                                <Image class="mr-[9%]  w-[5.6vw] h-[5.6vw] mt-[0.4vw]" width="85" height="85" src={Armani_Logo}></Image>
                                <Image class="mr-[4%]  w-[9.3vw] h-[9.3vw] mt-[-1.4vw]" width="140" height="140" src={DocleAndGabbana_Logo}></Image>
                            </div>
                            <div class="flex mr-[7%]">
                                <Image class='mr-[3%] w-[10vw] h-[10vw] mt-[-1.2vw]'src={Burberry_Logo}></Image>
                                <Image class='mr-[3%] w-[6.5vw] h-[6.5vw]'src={RayBan_Logo}></Image>
                                <Image class='mr-[3%] w-[6.5vw] h-[6.5vw]' src={Coach_Logo}></Image>
                                <Image class='mr-[3%] w-[6.5vw] h-[6.5vw]' src={Guess_Logo}></Image>
                            </div>
                            <div class="flex mr-[14%]">
                                <Image class='mr-[3%]' width="120" height="120" src={Oakley_Logo}></Image>
                                <Image class='mr-[7%] w-[6.5vw] h-[6.5vw]' src={MCM_Logo}></Image>
                                <Image class='mr-[7%] w-[6.5vw] h-[6.5vw]' src={Lacoste_Logo}></Image>
                                <Image class='mr-[7%] w-[6.5vw] h-[6.5vw]' src={Versace_Logo}></Image>
                            </div>
                            {/* <h3 className="font-bold text-lg text-black">GLASSES</h3>
                            <p className="py-4 text-black">glasses are here</p> */}
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                        </dialog>
                    </div>
                </div>
            </div>
            <GreenRectangleBanner text={"Designer Frames - Prescription Eyeglasses - Safety Glasses - Sports Glasses - Blue Light Glasses - Sunglasses"}></GreenRectangleBanner>
        </section>
    </>
  )
}
