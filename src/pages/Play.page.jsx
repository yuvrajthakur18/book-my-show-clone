import React from 'react'
import PlaysLayoutHoc from '../layout/Plays.layout';
// Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className='playContainer mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Events in Indore </h2>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMyBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357950-sgrhfymtnk-portrait.jpg"
                  title="Gaurav Kapoor Live"
                  subtitle="Comedy | Hindi | 18yrs + | 1hr"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heSBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00309320-tlklzqwjdr-portrait.jpg"
                  title="Monali Thakur - Singing"
                  subtitle="Music | English | 10yrs+ | 2hrs 30mins"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354491-xyexlhwxzw-portrait.jpg"
                  title="Samay Raina Unfiltered"
                  subtitle="Comedy | Hindi | 16yrs+ | 1hr 15mins"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350193-xpwwcfecsg-portrait.jpg"
                  title="Madhur Virli Live"
                  subtitle="Comedy Shows | Hindi | 18yrs + | 2hrs"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA3IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356980-wbafvgpdjy-portrait.jpg"
                  title="Blind Dating - Florican"
                  subtitle="Drama | English | All age grps | 1hrs"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMyBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358440-zdzrcwmccd-portrait.jpg"
                  title="Half Empty Half Full"
                  subtitle="Comedy | English | All age grps | 2hrs"
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOSBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357970-smnjqkpeps-portrait.jpg"
                  title="Striker presents Sasha"
                  subtitle="Music | English | All age grps | 2hrs"
                />
              </div>
            </div>
          </div>

          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <div>
              <PlayFilter
                title = "Date"
                tags = {["Today", "Tomorrow", "This Weekend"]}
              /> 
            </div>
            <div>
              <PlayFilter 
                title = "Language"
                tags = {["English", "Hindi", "Tamil"]}
              /> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaysLayoutHoc(PlayPage)
