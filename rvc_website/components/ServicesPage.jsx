import React from 'react'
import Image from 'next/image'
import DocPatient_pic2 from '../public/rvc_glasses/doc_patient2.jpg'
import DocPatient_pic3 from '../public/rvc_glasses/doc_patient1.jpg'
import ContactsRoom_pic1 from '../public/rvc_office/rvc_contactcenter3.jpg'
import RVCGlassesRoom_pic1 from '../public/rvc_glasses/rvc_glasseswall2.jpg'
import BlueRectangle from '../public/gen_icons/blue_rectangle_background.png'
import Gucci_Logo from '../public/gen_icons/gucci_logo_1.svg'
import Prada_Logo from '../public/gen_icons/prada_logo_1.svg'
import Armani_Logo from '../public/gen_icons/armani_logo_2.svg'
import Burberry_Logo from '../public/gen_icons/burberry_logo_1.svg'
import CalvinClien_Logo from '../public/gen_icons/calvinklien_logo_1.svg'
import Coach_Logo from '../public/gen_icons/coach_logo_2.svg'
import DocleAndGabbana_Logo from '../public/gen_icons/docleandgabbanna_logo_1.svg'
import GreenRectangleBanner from '@/components/GreenRectangleBanner'

export default function ServicesPage() {
  return (
    <>
        <section class="h-[100vh] w-[100%] absolute">
        <div class="absolute font-<K2D> text-6xl w-[100%] flex justify-center top-[15%]">
            <div class="text-black">Our <mark class="text-primary bg-transparent">Services</mark></div>
        </div>
        <div>
            <Image src={BlueRectangle} class="w-[600px] h-[400px] z-1 absolute top-[34.3%] left-[55.7%]" alt='BlueRectagneBackground'></Image>
            <Image src={DocPatient_pic2} class="w-[600px] h-[400px] z-1 absolute top-[33%] left-[55%] brightness-125" alt='DocPatientPic2'></Image>
        </div>
        <div class='w-[30%] h-[50%] p-[20px] static ml-[10%] mt-[16%] rounded-md justify-center'>
            <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                <div class="flex flex-row pb-[10px] w-[100%] justify-left">
                <div class="mr-[2%] text-secondary text-4xl">Eye Exams</div>
                </div>
                <div class="flex flex-col w-[100%] justify-left mb-[10px]">
                    <div class="text-lg mb-[10px]">Regardless of your age or health, it’s important to have regular eye exams.</div>
                    <div class="text-lg">We examine, treat, and diagnose:</div>
                </div>
                <div class="flex flex-row w-[100%] justify-left text-lg ml-[7%]">
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
                <Image src={BlueRectangle} class="w-[600px] h-[400px] z-1 absolute top-[16.3%] left-[10.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={DocPatient_pic3} class="w-[600px] h-[400px] z-1 absolute top-[15%] left-[10%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[63%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[10px] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-4xl">Pediatric Exams</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[10px]">
                        <div class="text-lg mb-[10px]">Approximately 25% of school-aged children have vision problems. All children should have a comprehensive eye exam before age 3.  It is very important for parents to know that vision screenings performed at school or by a pediatrician are not substitutes for a comprehensive eye exam.  At Reese Vision Care, we see children age 3 years and older.</div>
                    </div>
                </div>
            </div>
            <GreenRectangleBanner text={"We have lots of frames that look cool and fit well so kids actually love their glasses! We use durable products and safe polycarbonate lenses.  We also offer contact lenses for children.  Disposable contact lenses are safer and more convenient making them a great option for kids, especially for sports and other activities."}></GreenRectangleBanner>
        </section>
        <section class="top-[200%] h-[100vh] w-[100%] absolute">
            <div>
                <Image src={BlueRectangle} class="w-[600px] h-[400px] z-1 absolute top-[16.3%] left-[55.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={ContactsRoom_pic1} class="w-[600px] h-[400px] z-1 absolute top-[15%] left-[55%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[10%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[10px] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-4xl">Contact Lenses</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[10px]">
                        <div class="text-lg mb-[10px]">Dr. Reese is a contact lens specialist.  Dr. Reese fits contact lenses of all types, including color lenses, lenses for astigmatism, and multi-focal lenses. Whether you prefer daily, weekly or monthly disposables, we provide a wide selection of contact lenses to fit your needs. </div>
                    </div>
                </div>
            </div>
            <GreenRectangleBanner text={"We have lots of frames that look cool and fit well so kids actually love their glasses! We use durable products and safe polycarbonate lenses.  We also offer contact lenses for children.  Disposable contact lenses are safer and more convenient making them a great option for kids, especially for sports and other activities."}></GreenRectangleBanner>
        </section>
        <section class="top-[300%] h-[100vh] w-[100%] absolute">
            <div>
                <Image src={BlueRectangle} class="w-[600px] h-[400px] z-1 absolute top-[16.3%] left-[10.7%]" alt='BlueRectagneBackground'></Image>
                <Image src={RVCGlassesRoom_pic1} class="w-[600px] h-[400px] z-1 absolute top-[15%] left-[10%] brightness-125" alt='DocPatientPic2'></Image>
            </div>
            <div class='w-[30%] h-[50%] p-[20px] static ml-[63%] mt-[10%] rounded-md justify-center'>
                <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                    <div class="flex flex-row pb-[10px] w-[100%] justify-left">
                    <div class="mr-[2%] text-secondary text-4xl">Eyewear</div>
                    </div>
                    <div class="flex flex-col w-[100%] justify-left mb-[10px]">
                        <div class="text-lg mb-[10px]">A pair of glasses isn’t just about having great sight, it’s about looking great too. We offer a complete optical showroom with quality eyewear for every lifestyle and budget.  Our knowledgeable and friendly staff will help you choose the perfect eyewear for you!</div>
                        <button onClick={()=>document.getElementById('brands_modal').showModal()} className="btn btn-wide btn-primary text-white font-<K2D> text-lg normal-case font-normal">View Supported Brands</button>
                        <dialog id="brands_modal" className="modal">
                        <div className="modal-box flex flex-col items-center">
                            <div class="flex">
                                <Image width="100" height="100" src={Gucci_Logo}></Image>
                                <Image width="100" height="100" src={Prada_Logo}></Image>
                                <Image width="100" height="100" src={Armani_Logo}></Image>
                                <Image width="100" height="100" src={DocleAndGabbana_Logo}></Image>
                            </div>
                            <div class="flex">
                                <Image width="100" height="100" src={Burberry_Logo}></Image>
                                <Image width="100" height="100" src={CalvinClien_Logo}></Image>
                                <Image width="100" height="100" src={Coach_Logo}></Image>
                            </div>
                            <div class="flex">

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
