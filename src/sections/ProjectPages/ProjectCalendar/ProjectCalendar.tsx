import { useEffect, useRef, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import nextArrowIcon from "src/assets/images/icons/next-arrow.png"
import {
  add,
  getDay,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  parse,
  startOfToday,
  startOfMonth,
  endOfWeek,
  startOfWeek,
  isSameMonth,
  fromUnixTime
} from "date-fns"
import ProjectCard from "./ProjectCard/ProjectCard"
import ProjectCalendarStyleWrapper from "./ProjectCalendar.style"
// assets
import coinIcon1 from "src/assets/images/project/previous-image.png"
import coinIcon2 from "src/assets/images/project/previous-image2.png"
import coinIcon3 from "src/assets/images/project/previous-image3.png"
import coinIcon4 from "src/assets/images/project/chain.png"
import { filterLaunchpads } from "src/apis/user"
import { UserLaunchpadFormType } from "src/types/userLaunchpadList"
import { toCapitalizeFirstLetter } from "src/utils/commons"
import { accessListUser } from "src/const/project-list"
import { uniqBy } from "lodash"
export type SelectedLaunchpadType = UserLaunchpadFormType & { groupLaunchpad: UserLaunchpadFormType[] }

const ProjectCalendar = () => {
  //modal state
  const [isModal, setModal] = useState(false)
  // project state
  const [launchpad, setLaunchpad] = useState<SelectedLaunchpadType>({} as SelectedLaunchpadType)

  const today = startOfToday()
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth))
  })

  // navigate to prev month
  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }
  // navigate to next month
  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  // launchpad thumb icon shows by date
  const renderProjectImg = (day: any) => {
    const selectedLaunchpads = launchpads
      .filter((launchpad: UserLaunchpadFormType) => {
        const formatStartAt = format(new Date(fromUnixTime(launchpad.startAt)), "yyyy-MM-dd")
        const formatDay = format(new Date(day), "yyyy-MM-dd")
        return isSameDay(formatStartAt, formatDay)
      })
      .map((item) => ({ ...item, projectId: item.project.uuid }))

    if (selectedLaunchpads.length > 0) {
      const html = uniqBy(selectedLaunchpads, "projectId")
        .slice(0, 3)
        .map((item: any, idx: any) => (
          <div
            className='launchpad'
            onClick={() => handleProjectLaunchpad({ ...item, groupLaunchpad: selectedLaunchpads })}
          >
            <div className='project_thumb'>
              <img key={idx} src={item.project.logoUrl} alt='project thumb' />
            </div>
            <div className='project_desc'>
              <p>{toCapitalizeFirstLetter(item.project.name) || ""}</p>
              <span>{item.project.tokenSymbol || ""}</span>
            </div>
          </div>
        ))

      return html
    }
  }

  const modalHandle = () => {
    setModal(false)
    setLaunchpad({} as SelectedLaunchpadType)
  }

  const handleProjectLaunchpad = (item: SelectedLaunchpadType) => {
    setLaunchpad(item)
    setModal(true)
  }

  // calendar date start from: class logic
  const colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"]
  const [launchpads, setLaunchpads] = useState<UserLaunchpadFormType[]>([])
  const [type, setType] = useState<any>()
  const shouldFetchRef = useRef(true)

  useEffect(() => {
    if (!shouldFetchRef.current) {
      return
    }
    const startDate = format(new Date(days[0]), "yyyy-MM-dd")
    const endDate = format(new Date(days[days.length - 1]), "yyyy-MM-dd")
    const params: any = {
      time: {
        startDate,
        endDate
      }
    }
    if (type) {
      params["type"] = type
    }

    filterLaunchpads(params)
      .then((res) => {
        const data = res.data.data.filter((item: UserLaunchpadFormType) => item.project !== null)
        setLaunchpads(data)
        shouldFetchRef.current = false
      })
      .catch(() => {
        setLaunchpads([])
        shouldFetchRef.current = false
      })
  }, [days, shouldFetchRef, type])

  const renderButtonFilterByType = () => {
    return (
      <>
        <button>
          {accessListUser.find((access) => access.value === type)?.title || "All access"}
          <img src={nextArrowIcon} alt='icon' />
          <ul className='sub-menu'>
            {accessListUser.map((item) => (
              <li
                onClick={() => {
                  shouldFetchRef.current = true
                  setType(item.value)
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </button>
      </>
    )
  }

  return (
    <ProjectCalendarStyleWrapper>
      {isModal && (
        <div className='project-modal'>
          <div className='modal_content'>
            <ProjectCard launchpad={launchpad} modalHandle={modalHandle} />
          </div>
        </div>
      )}
      <div className='container'>
        <div className='project_calendar_header'>
          <div className='calendar_shorting_btn'>
            <button
              type='button'
              onClick={() => {
                shouldFetchRef.current = true
                previousMonth()
              }}
            >
              <FiChevronLeft />
            </button>
            <span className='current_date'>{format(firstDayCurrentMonth, "MMMM yyyy")}</span>

            <button
              type='button'
              onClick={() => {
                shouldFetchRef.current = true
                nextMonth()
              }}
            >
              <FiChevronRight />
            </button>
          </div>
          <div className='item_sorting_list'>
            {renderButtonFilterByType()}
            <button>
              All Block Chain
              <img src={nextArrowIcon} alt='icon' />
              <ul className='sub-menu'>
                <li>
                  <img src={coinIcon1} alt='icon' /> Binance (BSC)
                </li>
                <li>
                  <img src={coinIcon2} alt='icon' /> Ethereum (ETH)
                </li>
                <li>
                  <img src={coinIcon3} alt='icon' /> Polygon
                </li>
                <li>
                  <img src={coinIcon4} alt='icon' /> All Block Chain
                </li>
              </ul>
            </button>
          </div>
        </div>
        <div className='week_list grid grid-cols-7'>
          <span className='week_name'>Sun</span>
          <span className='week_name'>Mon</span>
          <span className='week_name'>Tue</span>
          <span className='week_name'>Wed</span>
          <span className='week_name'>Thu</span>
          <span className='week_name'>Fri</span>
          <span className='week_name'>Sat</span>
        </div>

        <div className='month_list grid grid-cols-7'>
          {days.map((day: any, dayIdx: number) => (
            <div
              key={dayIdx}
              className={`month_date ${
                isSameMonth(day, firstDayCurrentMonth) ? "active_date" : ""
              } ${dayIdx === 0 ? colStartClasses[getDay(day)] : ""}`}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>

              {/* render project thumb, that matched with project date*/}
              {renderProjectImg(day)}
            </div>
          ))}
        </div>
      </div>
    </ProjectCalendarStyleWrapper>
  )
}

export default ProjectCalendar
