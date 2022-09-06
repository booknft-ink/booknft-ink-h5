import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ActivitiesWidget,
  ListsWidget6,
  TablesWidget10,
  MixedWidget8,
  TilesWidget1,
  TilesWidget4,
  TilesWidget2,
  TilesWidget5,
  TilesWidget3,
} from '../../../_metronic/partials/widgets'
import {MintHomepage} from '../../../_metronic/partials/custom/MintHomepage'

const makeHistroyDesc = () => {
  const desc = [
    {
      title: '秦朝焚书坑儒',
      content: '秦始皇焚书坑儒烧毁了大量的书籍',
    },
    {
      title: '西汉200年王莽篡位焚书',
      content: '当时整个藏书不过13000卷。可是随着王莽篡位，这13000卷书全部焚毁。',
    },
    {
      title: '东汉末年董卓进京烧书',
      content: '董卓把书烧了个干净，数字不详，很多修书都灰飞烟灭',
    },
    {
      title: '永嘉之祸，西晋的皇宫被烧',
      content:
        '晋武帝司马炎开始重新修书，藏书。但是永嘉之祸时，西晋的皇宫被烧，书再次一本都没留下。 ',
    },
    {
      title: '梁武帝灭齐国，毁书6万本',
      content: '南北朝，书籍增加到了6万多本，梁武帝灭齐国，又把这些书都烧了。',
    },
    {
      title: '中国最大烧书事件：江陵焚书',
      content:
        '历史上规模最大的烧书是梁元帝的江陵焚书，梁元帝上位后，把【文德殿】和【藏书馆】14多万卷书运回江陵后全部烧毁。 “读书万卷 ，犹有今日，故焚之！”他把自己亡国的责任归为“读书无用”。',
    },
    {
      title: '安史之乱',
      content:
        '到唐朝，安史之乱，唐玄宗在逃亡的过程中，史书有记载：“安禄山之乱，尺简不藏。”  又损失了好多书籍。',
    },
    {
      title: '黄巢起义',
      content:
        '黄巢起义，《旧唐书经籍志》载：“广明初，黄巢干纪，再陷两京，宫庙寺署焚荡殆尽。曩时遗籍，尺简无存。”',
    },
    {
      title: '靖康之难',
      content:
        '靖康之难时，金军在都城抢走大量书籍典藏，导致这些书最后下落不明，极少有流传到北方的。 ',
    },
    {
      title: '南宋临安烧书',
      content: '南宋末年，伯颜又对着临安放了把大火。',
    },
    {
      title: '清朝文字狱',
      content:
        '乾隆皇帝虽然是是历史上修书最多的人，但是他毁得比修得多。乾隆皇帝修《四库全书》，全国图书都要进献检查，涉及明朝的不利清朝的文献全部被禁毁，查缴的禁书达三千多种，十五万多部。 ',
    },
    {
      title: '火烧圆明园',
      content:
        '一批又一批的宫殿陆续倒下去,一处又一处无比美丽的景观被烧毁,就连那部被誉为旷世大典、百科全书式的文献集——《永乐大典》也在大火中灰飞烟灭。',
    },
    {
      title: '世界最大烧书事件：亚历山大图书馆被烧毁',
      content:
        '亚历山大城建立了举世无双、当时世界上藏书最多、文种最多、书目记录最全的亚历山大图书馆。在鼎盛时期，图书馆藏书量达70万卷，仅图书目录就达120卷，馆内收藏了当时地中海沿岸古埃及、古希腊、古罗马的大批哲学、诗歌、文学、医学、宗教、伦理和其他科学著述和孤本书。后来惨遭火灾，因而被摧毁。连一个石块实物都没有留下。 ',
    },
  ]

  const dom: React.ReactElement[] = []

  desc.forEach((item, index) => {
    dom.push(
      <div className='m-0'>
        <div
          className='d-flex align-items-center collapsible py-3 toggle mb-0'
          data-bs-toggle='collapse'
          data-bs-target={'#kt_job_1_1' + index}
        >
          <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
            <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect opacity='0.3' x='2' y='2' width='20' height='20' rx='5' fill='currentColor' />
                <rect x='6.0104' y='10.9247' width='12' height='2' rx='1' fill='currentColor' />
              </svg>
            </span>
            <span className='svg-icon toggle-off svg-icon-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect opacity='0.3' x='2' y='2' width='20' height='20' rx='5' fill='currentColor' />
                <rect
                  x='10.8891'
                  y='17.8033'
                  width='12'
                  height='2'
                  rx='1'
                  transform='rotate(-90 10.8891 17.8033)'
                  fill='currentColor'
                />
                <rect x='6.01041' y='10.9247' width='12' height='2' rx='1' fill='currentColor' />
              </svg>
            </span>
          </div>
          <h4 className='text-gray-700 fw-bold cursor-pointer mb-0'>{item.title}</h4>
        </div>
        <div id={'kt_job_1_1' + index} className='collapse show fs-6 ms-1'>
          <div className='mb-4'>
            <div className='d-flex align-items-center ps-10 mb-n1'>
              <span className='bullet me-3'></span>
              <div className='text-gray-600 fw-semibold fs-6'>{item.content}</div>
            </div>
          </div>
        </div>
        <div className='separator separator-dashed'></div>
      </div>
    )
  })
  return dom
}

const DashboardPage = () => (
  <>
    <MintHomepage></MintHomepage>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-12'>
        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-12'>
            <TilesWidget4 className='card-xl-stretch' />
          </div>
        </div>

        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-6'>
            <TilesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
            <div className='row gx-5 gx-xl-8'>
              <div className='col-xl-12'>
                <TilesWidget5
                  className='card-xxl-stretch bg-primary'
                  svgIcon='/media/icons/duotune/general/gen025.svg'
                  titleClass='text-white'
                  descriptionClass='text-white'
                  iconClass='svg-icon-white'
                  title='790'
                  description='守护者'
                />
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <TilesWidget3 className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
      </div>
    </div>

    {/* begin::Row */}
    <div className='row gy-5 g-xl-12'>
      <div className='col-xxl-12'>
        <ActivitiesWidget className='card-xxl-stretch' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* end::Row */}
    <div className='d-flex flex-column flex-lg-row mb-17'>
      <div className='flex-lg-row-fluid me-0 me-lg-20'>
        <div className='mb-17'>
          <div className='m-0'>
            <h4 className='fs-1 text-gray-800 w-bolder mb-6'>人类的智慧浩劫记录</h4>
            <p className='fw-semibold fs-4 text-gray-600 mb-2'>
              典籍的传承是人类最宝贵的遗产，这些人类的知识是文明的基础，是人类发展过程中知识和智慧的记录，比黄金要更贵重。而过去人类的这些宝贵遗产能留下和传承的非常少，古代人类只能通过雕刻到石头上才能勉强留下这些宝贵的智慧，并部分传承下来，而历史上的焚书坑儒，火烧圆明园，火烧亚历山大图书馆，每一次乱象都会导致智慧惨遭荼毒，甚至绝迹。
              虽然现在的印刷术和计算机技术让这些知识的传播和复制非常容易，虽然可以避免被人为简单破坏和自然风蚀。但是无法避免统治阶级和权贵的刻意篡改，把原始作者的真实思想演变成自己的统治和奴役洗脑工具。
            </p>
          </div>
          {makeHistroyDesc()}
        </div>
      </div>
      <div className='flex-lg-row-auto w-100 w-lg-275px w-xxl-350px'>
        <div className='card bg-light'>
          <div className='card-body'>
            <div className='mb-7'>
              <h2 className='fs-1 text-gray-800 w-bolder mb-6'>我们的使命</h2>
              <p className='fw-semibold fs-6 text-gray-600'>
                守护人类文明和智慧，让 NFT 技术为价值的服务。
              </p>
            </div>
            <div className='mb-8'>
              <h4 className='text-gray-700 w-bolder mb-0'>Requirements</h4>
              <div className='my-2'>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with JavaScript</div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Good time-management skills</div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with React</div>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with HTML / CSS</div>
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <h4 className='text-gray-700 w-bolder mb-0'>Our Achievements</h4>
              <div className='my-2'>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with JavaScript</div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Good time-management skills</div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with React</div>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='bullet me-3'></span>
                  <div className='text-gray-600 fw-semibold fs-6'>Experience with HTML / CSS</div>
                </div>
              </div>
            </div>
            <a
              href='../../demo22/dist/pages/blog/post.html'
              className='link-primary fs-6 fw-semibold'
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
