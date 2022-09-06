import React, {useEffect, useRef} from 'react'

export function MintHomepage() {
  return (
    <div className='d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9'>
      {/* <!--begin::Heading--> */}
      <div className='text-center mb-5 mb-lg-10 py-10 py-lg-20'>
        {/* <!--begin::Title--> */}
        <h1 className='text-white lh-base fw-bold fs-2x fs-lg-3x mb-15'>
          成为人类智慧
          <span
            style={{
              background: 'linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)',
              backgroundClip: 'text',
            }}
          >
            <span id='kt_landing_hero_text'>守护者</span>
          </span>
        </h1>
        {/* <!--end::Title--> */}
        {/* <!--begin::Action--> */}
        <a href='#' className='btn btn-primary'>
          Mint 典籍 NFT
        </a>
        {/* <!--end::Action--> */}
      </div>
      {/* <!--end::Heading--> */}
      {/* <!--begin::Clients--> */}
      <div className='d-flex flex-center flex-wrap position-relative px-5'>
        {/* <!--begin::Client--> */}
        {/* <!--end::Client--> */}
      </div>
      {/* <!--end::Clients--> */}
    </div>
  )
}
