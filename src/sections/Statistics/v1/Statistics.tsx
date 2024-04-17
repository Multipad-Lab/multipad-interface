import Counter from "src/components/counter"
import { SectionTitle } from "src/components/sectionTitle"
import data from "src/assets/data/statistics/dataV1"
// import Count from "src/sections/Count/v1"
import shapeImg from "src/assets/images/bg/RoadMapV2Fram.png"
import StatisticsStyleWrapper from "./Statistics.style"
import { clsx } from "clsx"

const Statistics = () => {
  return (
    <StatisticsStyleWrapper numbers={data.map((item) => Number(item.value))}>
      <div className='container'>
        <SectionTitle title='TOKENOMICS' subtitle='STATISTICS' />

        <div className='v1_tokenomics_content_list_sect'>
          {data?.map((statistic, i) => (
            <div
              key={i}
              className={`v1_tokenomics_content_list v1_tokenomics_content_list_${Number(statistic.value) % 1 !== 0 ? `${statistic.value.split(".")[0]}_${statistic.value.split(".")[1]}` : Number(statistic.value)}`}
            >
              <div className={clsx("v1_tokenomics_content_list_text smallPercent")}>
                <h4>
                  {statistic.title}
                  <Counter
                    end={statistic.value}
                    decimal='.'
                    decimals={Number(statistic.value) % 1 !== 0 ? "1" : "0"}
                    suffix='%'
                  />
                </h4>
              </div>
              <div className={`v1_tokenomics_content_list_progress v1_tokenomics_content_list_progress_${i + 1}`}>
                <Counter
                  end={statistic.value}
                  decimal='.'
                  decimals={Number(statistic.value) % 1 !== 0 ? "1" : "0"}
                  suffix='%'
                />
              </div>
            </div>
          ))}
        </div>

        {/* stat counter section*/}
        {/* <Count /> */}
      </div>

      <img src={shapeImg} alt='section-shape' className='img-fluid section_shape section_shape_top' />
      <img src={shapeImg} alt='section-shape' className='img-fluid section_shape section_shape_bottom' />
    </StatisticsStyleWrapper>
  )
}

export default Statistics
