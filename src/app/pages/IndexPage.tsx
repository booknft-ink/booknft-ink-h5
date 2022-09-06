import React from 'react'

export function IndexPage() {
  return (
    <div className='d-flex flex-column flex-root' id='kt_app_root'>
      {/* <!--begin::Header Section--> */}
      <div className='mb-0' id='home'>
        {/* <!--begin::Wrapper--> */}
        <div
          className='bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg'
          style={{backgroundImage: 'url(assets/media/svg/illustrations/landing.svg)'}}
        >
          {/* <!--begin::Header--> */}
          <div
            className='landing-header'
            data-kt-sticky='true'
            data-kt-sticky-name='landing-header'
            data-kt-sticky-offset="{default: '200px', lg: '300px'}"
          >
            {/* <!--begin::Container--> */}
            <div className='container'>
              {/* <!--begin::Wrapper--> */}
              <div className='d-flex align-items-center justify-content-between'>
                {/* <!--begin::Logo--> */}
                <div className='d-flex align-items-center flex-equal'>
                  {/* <!--begin::Mobile menu toggle--> */}
                  <button
                    className='btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none'
                    id='kt_landing_menu_toggle'
                  >
                    {/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg--> */}
                    <span className='svg-icon svg-icon-2hx'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z'
                          fill='currentColor'
                        />
                        <path
                          opacity='0.3'
                          d='M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    {/* <!--end::Svg Icon--> */}
                  </button>
                  {/* <!--end::Mobile menu toggle--> */}
                  {/* <!--begin::Logo image--> */}
                  <a href='../../demo22/dist/landing.html'>
                    <img
                      alt='Logo'
                      src='assets/media/logos/landing.svg'
                      className='logo-default h-25px h-lg-30px'
                    />
                    <img
                      alt='Logo'
                      src='assets/media/logos/landing-dark.svg'
                      className='logo-sticky h-20px h-lg-25px'
                    />
                  </a>
                  {/* <!--end::Logo image--> */}
                </div>
                {/* <!--end::Logo--> */}
                {/* <!--begin::Menu wrapper--> */}
                <div className='d-lg-block' id='kt_header_nav_wrapper'>
                  <div
                    className='d-lg-block p-5 p-lg-0'
                    data-kt-drawer='true'
                    data-kt-drawer-name='landing-menu'
                    data-kt-drawer-activate='{default: true, lg: false}'
                    data-kt-drawer-overlay='true'
                    data-kt-drawer-width='200px'
                    data-kt-drawer-direction='start'
                    data-kt-drawer-toggle='#kt_landing_menu_toggle'
                    data-kt-swapper='true'
                    data-kt-swapper-mode='prepend'
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                  >
                    {/* <!--begin::Menu--> */}
                    <div
                      className='menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-semibold'
                      id='kt_landing_menu'
                    >
                      {/* <!--begin::Menu item--> */}
                      <div className='menu-item'>
                        {/* <!--begin::Menu link--> */}
                        <a
                          className='menu-link nav-link active py-3 px-4 px-xxl-6'
                          href='#kt_body'
                          data-kt-scroll-toggle='true'
                          data-kt-drawer-dismiss='true'
                        >
                          Guard
                        </a>
                        {/* <!--end::Menu link--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className='menu-item'>
                        {/* <!--begin::Menu link--> */}
                        <a
                          className='menu-link nav-link py-3 px-4 px-xxl-6'
                          href='#how-it-works'
                          data-kt-scroll-toggle='true'
                          data-kt-drawer-dismiss='true'
                        >
                          人类智慧永久存储计划
                        </a>
                        {/* <!--end::Menu link--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className='menu-item'>
                        {/* <!--begin::Menu link--> */}
                        <a
                          className='menu-link nav-link py-3 px-4 px-xxl-6'
                          href='#achievements'
                          data-kt-scroll-toggle='true'
                          data-kt-drawer-dismiss='true'
                        >
                          说明
                        </a>
                        {/* <!--end::Menu link--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className='menu-item'>
                        {/* <!--begin::Menu link--> */}
                        <a
                          className='menu-link nav-link py-3 px-4 px-xxl-6'
                          href='#team'
                          data-kt-scroll-toggle='true'
                          data-kt-drawer-dismiss='true'
                        >
                          Team
                        </a>
                        {/* <!--end::Menu link--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                    </div>
                    {/* <!--end::Menu--> */}
                  </div>
                </div>
                {/* <!--end::Menu wrapper--> */}
                {/* <!--begin::Toolbar--> */}
                <div className='flex-equal text-end ms-1'>
                  <a href='' className='btn btn-success'>
                    链接钱包
                  </a>
                </div>
                {/* <!--end::Toolbar--> */}
              </div>
              {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::Container--> */}
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Landing hero--> */}
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
          {/* <!--end::Landing hero--> */}
        </div>
        {/* <!--end::Wrapper--> */}
        {/* <!--begin::Curve bottom--> */}
        <div className='landing-curve landing-dark-color mb-10 mb-lg-20'>
          <svg viewBox='15 12 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        {/* <!--end::Curve bottom--> */}
      </div>
      {/* <!--end::Header Section--> */}
      {/* <!--begin::How It Works Section--> */}
      <div className='mb-n10 mb-lg-n20 z-index-2'>
        {/* <!--begin::Container--> */}
        <div className='container'>
          {/* <!--begin::Heading--> */}
          <div className='text-center mb-17'>
            {/* <!--begin::Title--> */}
            <h3
              className='fs-2hx text-dark mb-5'
              id='how-it-works'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            >
              How it Works
            </h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Text--> */}
            <div className='fs-5 text-muted fw-bold'>
              Save thousands to millions of bucks by using single tool
              <br />
              for different amazing and great useful admin
            </div>
            {/* <!--end::Text--> */}
          </div>
          {/* <!--end::Heading--> */}
          {/* <!--begin::Row--> */}
          <div className='row w-100 gy-10 mb-md-20'>
            {/* <!--begin::Col--> */}
            <div className='col-md-4 px-5'>
              {/* <!--begin::Story--> */}
              <div className='text-center mb-10 mb-md-0'>
                {/* <!--begin::Illustration--> */}
                <img
                  src='assets/media/illustrations/sketchy-1/2.png'
                  className='mh-125px mb-9'
                  alt=''
                />
                {/* <!--end::Illustration--> */}
                {/* <!--begin::Heading--> */}
                <div className='d-flex flex-center mb-5'>
                  {/* <!--begin::Badge--> */}
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    1
                  </span>
                  {/* <!--end::Badge--> */}
                  {/* <!--begin::Title--> */}
                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Jane Miller</div>
                  {/* <!--end::Title--> */}
                </div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::Description--> */}
                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Story--> */}
            </div>
            {/* <!--end::Col--> */}
            {/* <!--begin::Col--> */}
            <div className='col-md-4 px-5'>
              {/* <!--begin::Story--> */}
              <div className='text-center mb-10 mb-md-0'>
                {/* <!--begin::Illustration--> */}
                <img
                  src='assets/media/illustrations/sketchy-1/8.png'
                  className='mh-125px mb-9'
                  alt=''
                />
                {/* <!--end::Illustration--> */}
                {/* <!--begin::Heading--> */}
                <div className='d-flex flex-center mb-5'>
                  {/* <!--begin::Badge--> */}
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    2
                  </span>
                  {/* <!--end::Badge--> */}
                  {/* <!--begin::Title--> */}
                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Setup Your App</div>
                  {/* <!--end::Title--> */}
                </div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::Description--> */}
                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Story--> */}
            </div>
            {/* <!--end::Col--> */}
            {/* <!--begin::Col--> */}
            <div className='col-md-4 px-5'>
              {/* <!--begin::Story--> */}
              <div className='text-center mb-10 mb-md-0'>
                {/* <!--begin::Illustration--> */}
                <img
                  src='assets/media/illustrations/sketchy-1/12.png'
                  className='mh-125px mb-9'
                  alt=''
                />
                {/* <!--end::Illustration--> */}
                {/* <!--begin::Heading--> */}
                <div className='d-flex flex-center mb-5'>
                  {/* <!--begin::Badge--> */}
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    3
                  </span>
                  {/* <!--end::Badge--> */}
                  {/* <!--begin::Title--> */}
                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Enjoy Nautica App</div>
                  {/* <!--end::Title--> */}
                </div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::Description--> */}
                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Story--> */}
            </div>
            {/* <!--end::Col--> */}
          </div>
          {/* <!--end::Row--> */}
          {/* <!--begin::Product slider--> */}
          <div className='tns tns-default'>
            {/* <!--begin::Slider--> */}
            <div
              data-tns='true'
              data-tns-loop='true'
              data-tns-swipe-angle='false'
              data-tns-speed='2000'
              data-tns-autoplay='true'
              data-tns-autoplay-timeout='18000'
              data-tns-controls='true'
              data-tns-nav='false'
              data-tns-items='1'
              data-tns-center='false'
              data-tns-dots='false'
              data-tns-prev-button='#kt_team_slider_prev1'
              data-tns-next-button='#kt_team_slider_next1'
            >
              {/* <!--begin::Item--> */}
              <div className='text-center px-5 pt-5 pt-lg-10 px-lg-10'>
                <img
                  src='assets/media/product-demos/demo1.png'
                  className='card-rounded shadow mw-100'
                  alt=''
                />
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center px-5 pt-5 pt-lg-10 px-lg-10'>
                <img
                  src='assets/media/product-demos/demo2.png'
                  className='card-rounded shadow mw-100'
                  alt=''
                />
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center px-5 pt-5 pt-lg-10 px-lg-10'>
                <img
                  src='assets/media/product-demos/demo4.png'
                  className='card-rounded shadow mw-100'
                  alt=''
                />
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center px-5 pt-5 pt-lg-10 px-lg-10'>
                <img
                  src='assets/media/product-demos/demo5.png'
                  className='card-rounded shadow mw-100'
                  alt=''
                />
              </div>
              {/* <!--end::Item--> */}
            </div>
            {/* <!--end::Slider--> */}
            {/* <!--begin::Slider button--> */}
            <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_prev1'>
              {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr074.svg--> */}
              <span className='svg-icon svg-icon-3x'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/* <!--end::Svg Icon--> */}
            </button>
            {/* <!--end::Slider button--> */}
            {/* <!--begin::Slider button--> */}
            <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_next1'>
              {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg--> */}
              <span className='svg-icon svg-icon-3x'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/* <!--end::Svg Icon--> */}
            </button>
            {/* <!--end::Slider button--> */}
          </div>
          {/* <!--end::Product slider--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
      {/* <!--end::How It Works Section--> */}
      {/* <!--begin::Statistics Section--> */}
      <div className='mt-sm-n10'>
        {/* <!--begin::Curve top--> */}
        <div className='landing-curve landing-dark-color'>
          <svg viewBox='15 -1 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        {/* <!--end::Curve top--> */}
        {/* <!--begin::Wrapper--> */}
        <div className='pb-15 pt-18 landing-dark-bg'>
          {/* <!--begin::Container--> */}
          <div className='container'>
            {/* <!--begin::Heading--> */}
            <div
              className='text-center mt-15 mb-18'
              id='achievements'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            >
              {/* <!--begin::Title--> */}
              <h3 className='fs-2hx text-white fw-bold mb-5'>We Make Things Better</h3>
              {/* <!--end::Title--> */}
              {/* <!--begin::Description--> */}
              <div className='fs-5 text-gray-700 fw-bold'>
                Save thousands to millions of bucks by using single tool
                <br />
                for different amazing and great useful admin
              </div>
              {/* <!--end::Description--> */}
            </div>
            {/* <!--end::Heading--> */}
            {/* <!--begin::Statistics--> */}
            <div className='d-flex flex-center'>
              {/* <!--begin::Items--> */}
              <div className='d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px'>
                {/* <!--begin::Item--> */}
                <div
                  className='d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain'
                  style={{backgroundImage: "url('assets/media/svg/misc/octagon.svg')"}}
                >
                  {/* <!--begin::Symbol--> */}
                  {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg--> */}
                  <span className='svg-icon svg-icon-2tx svg-icon-white mb-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='2' y='2' width='9' height='9' rx='2' fill='currentColor' />
                      <rect
                        opacity='0.3'
                        x='13'
                        y='2'
                        width='9'
                        height='9'
                        rx='2'
                        fill='currentColor'
                      />
                      <rect
                        opacity='0.3'
                        x='13'
                        y='13'
                        width='9'
                        height='9'
                        rx='2'
                        fill='currentColor'
                      />
                      <rect
                        opacity='0.3'
                        x='2'
                        y='13'
                        width='9'
                        height='9'
                        rx='2'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/* <!--end::Svg Icon--> */}
                  {/* <!--end::Symbol--> */}
                  {/* <!--begin::Info--> */}
                  <div className='mb-0'>
                    {/* <!--begin::Value--> */}
                    <div className='fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center'>
                      <div
                        className='min-w-70px'
                        data-kt-countup='true'
                        data-kt-countup-value='700'
                        data-kt-countup-suffix='+'
                      >
                        0
                      </div>
                    </div>
                    {/* <!--end::Value--> */}
                    {/* <!--begin::Label--> */}
                    <span className='text-gray-600 fw-semibold fs-5 lh-0'>Known Companies</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Info--> */}
                </div>
                {/* <!--end::Item--> */}
                {/* <!--begin::Item--> */}
                <div
                  className='d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain'
                  style={{backgroundImage: "url('assets/media/svg/misc/octagon.svg')"}}
                >
                  {/* <!--begin::Symbol--> */}
                  {/* <!--begin::Svg Icon | path: icons/duotune/graphs/gra008.svg--> */}
                  <span className='svg-icon svg-icon-2tx svg-icon-white mb-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/* <!--end::Svg Icon--> */}
                  {/* <!--end::Symbol--> */}
                  {/* <!--begin::Info--> */}
                  <div className='mb-0'>
                    {/* <!--begin::Value--> */}
                    <div className='fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center'>
                      <div
                        className='min-w-70px'
                        data-kt-countup='true'
                        data-kt-countup-value='80'
                        data-kt-countup-suffix='K+'
                      >
                        0
                      </div>
                    </div>
                    {/* <!--end::Value--> */}
                    {/* <!--begin::Label--> */}
                    <span className='text-gray-600 fw-semibold fs-5 lh-0'>Statistic Reports</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Info--> */}
                </div>
                {/* <!--end::Item--> */}
                {/* <!--begin::Item--> */}
                <div
                  className='d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain'
                  style={{backgroundImage: "url('assets/media/svg/misc/octagon.svg')"}}
                >
                  {/* <!--begin::Symbol--> */}
                  {/* <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg--> */}
                  <span className='svg-icon svg-icon-2tx svg-icon-white mb-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/* <!--end::Svg Icon--> */}
                  {/* <!--end::Symbol--> */}
                  {/* <!--begin::Info--> */}
                  <div className='mb-0'>
                    {/* <!--begin::Value--> */}
                    <div className='fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center'>
                      <div
                        className='min-w-70px'
                        data-kt-countup='true'
                        data-kt-countup-value='35'
                        data-kt-countup-suffix='M+'
                      >
                        0
                      </div>
                    </div>
                    {/* <!--end::Value--> */}
                    {/* <!--begin::Label--> */}
                    <span className='text-gray-600 fw-semibold fs-5 lh-0'>Secure Payments</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Info--> */}
                </div>
                {/* <!--end::Item--> */}
              </div>
              {/* <!--end::Items--> */}
            </div>
            {/* <!--end::Statistics--> */}
            {/* <!--begin::Testimonial--> */}
            <div className='fs-2 fw-semibold text-muted text-center mb-3'>
              <span className='fs-1 lh-1 text-gray-700'>“</span>When you care about your topic,
              you’ll write about it in a
              <br />
              <span className='text-gray-700 me-1'>more powerful</span>, emotionally expressive way
              <span className='fs-1 lh-1 text-gray-700'>“</span>
            </div>
            {/* <!--end::Testimonial--> */}
            {/* <!--begin::Author--> */}
            <div className='fs-2 fw-semibold text-muted text-center'>
              <a
                href='../../demo22/dist/account/security.html'
                className='link-primary fs-4 fw-bold'
              >
                Marcus Levy,
              </a>
              <span className='fs-4 fw-bold text-gray-600'>KeenThemes CEO</span>
            </div>
            {/* <!--end::Author--> */}
          </div>
          {/* <!--end::Container--> */}
        </div>
        {/* <!--end::Wrapper--> */}
        {/* <!--begin::Curve bottom--> */}
        <div className='landing-curve landing-dark-color'>
          <svg viewBox='15 12 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        {/* <!--end::Curve bottom--> */}
      </div>
      {/* <!--end::Statistics Section--> */}
      {/* <!--begin::Team Section--> */}
      <div className='py-10 py-lg-20'>
        {/* <!--begin::Container--> */}
        <div className='container'>
          {/* <!--begin::Heading--> */}
          <div className='text-center mb-12'>
            {/* <!--begin::Title--> */}
            <h3
              className='fs-2hx text-dark mb-5'
              id='team'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            >
              Our Great Team
            </h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Sub-title--> */}
            <div className='fs-5 text-muted fw-bold'>
              It’s no doubt that when a development takes longer to complete, additional costs to
              <br />
              integrate and test each extra feature creeps up and haunts most of us.
            </div>
            {/* <!--end::Sub-title=--> */}
          </div>
          {/* <!--end::Heading--> */}
          {/* <!--begin::Slider--> */}
          <div className='tns tns-default'>
            {/* <!--begin::Wrapper--> */}
            <div
              data-tns='true'
              data-tns-loop='true'
              data-tns-swipe-angle='false'
              data-tns-speed='2000'
              data-tns-autoplay='true'
              data-tns-autoplay-timeout='18000'
              data-tns-controls='true'
              data-tns-nav='false'
              data-tns-items='1'
              data-tns-center='false'
              data-tns-dots='false'
              data-tns-prev-button='#kt_team_slider_prev'
              data-tns-next-button='#kt_team_slider_next'
              data-tns-responsive='{1200: {items: 3}, 992: {items: 2}}'
            >
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-1.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Paul Miles
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Development Lead</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-2.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Melisa Marcus
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Creative Director</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-5.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    David Nilson
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Python Expert</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-20.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Anne Clarc
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Project Manager</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-23.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Ricky Hunt
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Art Director</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-12.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Alice Wayde
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>Marketing Manager</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <div className='text-center'>
                {/* <!--begin::Photo--> */}
                <div
                  className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{backgroundImage: "url('assets/media/avatars/300-9.jpg')"}}
                ></div>
                {/* <!--end::Photo--> */}
                {/* <!--begin::Person--> */}
                <div className='mb-0'>
                  {/* <!--begin::Name--> */}
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Carles Puyol
                  </a>
                  {/* <!--end::Name--> */}
                  {/* <!--begin::Position--> */}
                  <div className='text-muted fs-6 fw-semibold mt-1'>QA Managers</div>
                  {/* <!--begin::Position--> */}
                </div>
                {/* <!--end::Person--> */}
              </div>
              {/* <!--end::Item--> */}
            </div>
            {/* <!--end::Wrapper--> */}
            {/* <!--begin::Button--> */}
            <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_prev'>
              {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr074.svg--> */}
              <span className='svg-icon svg-icon-3x'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/* <!--end::Svg Icon--> */}
            </button>
            {/* <!--end::Button--> */}
            {/* <!--begin::Button--> */}
            <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_next'>
              {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg--> */}
              <span className='svg-icon svg-icon-3x'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/* <!--end::Svg Icon--> */}
            </button>
            {/* <!--end::Button--> */}
          </div>
          {/* <!--end::Slider--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
    </div>
  )
}
