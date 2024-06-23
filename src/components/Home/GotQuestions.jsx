import { Accordion } from "@ark-ui/react"
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const GotQuestions = () => {
  return (
    <div>
        <section className="max-w-6xl mx-auto px-4 py-20">
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="md:w-1/2 lg:w-1/3">
                    <h1 className="text-3xl font-semibold uppercase">Got questions?</h1>
                    <h3 className="text-3xl font-semibold uppercase">We've got answers!</h3>
                </div>
                <div className="md:w-1/2 lg:w-2/3">
                    <Accordion.Root defaultValue={['What are Lightroom presets and why should I use them?']} className="flex flex-col gap-2" collapsible>
                        <Accordion.Item value="What are Lightroom presets and why should I use them?" className="flex flex-col gap-2" >
                            <Accordion.ItemTrigger className=" uppercase text-left text-lg font-semibold text-gray-500 flex items-center justify-between w-full p-4 border-2 border-gray-300 rounded-3xl">
                                What are Lightroom presets and why should I use them?
                                <Accordion.ItemIndicator>
                                    <FaRegArrowAltCircleDown />
                                </Accordion.ItemIndicator>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <div className=" bg-gray-200 text-sm rounded-3xl p-4">
                                    A Lightroom preset is a saved group of photo editing settings in Adobe Lightroom, which can be applied to any of
                                    your photos to improve its style, lighting, saturation, hues, and many other factors based on its setting. Designed
                                    to achieve a certain look” or style for your photo, presets work like a template that transforms your images in
                                    just 1 click.Using Imagery Presets can help you create a stunningly curated theme, elevate your brand, edit with
                                    style, speed, and consistency.  
                                </div>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                        
                        <Accordion.Item value="What do I need to use Lightroom presets?" className="flex flex-col gap-2" >
                            <Accordion.ItemTrigger className=" uppercase text-left text-lg font-semibold text-gray-500 flex items-center justify-between w-full p-4 border-2 border-gray-300 rounded-3xl">
                                What do I need to use Lightroom presets?
                                <Accordion.ItemIndicator>
                                    <FaRegArrowAltCircleUp />
                                </Accordion.ItemIndicator>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <div className=" bg-gray-200 text-sm rounded-3xl p-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, amet hic perferendis 
                                    voluptatibus suscipit voluptate. Odit cupiditate consequuntur nulla distinctio 
                                    eos commodi nihil quam dignissimos aut, quas doloribus officia, numquam eius quae
                                    nemo tenetur nesciunt quaerat repellat doloremque sint vel.
                                </div>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                        
                        <Accordion.Item value="How and when will I receive my Lightroom presets?" className="flex flex-col gap-2" >
                            <Accordion.ItemTrigger className=" uppercase text-left text-lg font-semibold text-gray-500 flex items-center justify-between w-full p-4 border-2 border-gray-300 rounded-3xl">
                                How and when will I receive my Lightroom presets?
                                <Accordion.ItemIndicator>
                                    <FaRegArrowAltCircleUp />
                                </Accordion.ItemIndicator>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <div className=" bg-gray-200 text-sm rounded-3xl p-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, amet hic perferendis 
                                    voluptatibus suscipit voluptate. Odit cupiditate consequuntur nulla distinctio 
                                    eos commodi nihil quam dignissimos aut, quas doloribus officia, numquam eius quae
                                    nemo tenetur nesciunt quaerat repellat doloremque sint vel. 
                                </div>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                        
                        <Accordion.Item value="How to save a preset in Lightroom?" className="flex flex-col gap-2" >
                            <Accordion.ItemTrigger className=" uppercase text-left text-lg font-semibold text-gray-500 flex items-center justify-between w-full p-4 border-2 border-gray-300 rounded-3xl">
                                How to save a preset in Lightroom?
                                <Accordion.ItemIndicator>
                                    <FaRegArrowAltCircleUp />
                                </Accordion.ItemIndicator>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <div className=" bg-gray-200 text-sm rounded-3xl p-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, amet hic perferendis 
                                    voluptatibus suscipit voluptate. Odit cupiditate consequuntur nulla distinctio 
                                    eos commodi nihil quam dignissimos aut, quas doloribus officia, numquam eius quae
                                    nemo tenetur nesciunt quaerat repellat doloremque sint vel. 
                                </div>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GotQuestions