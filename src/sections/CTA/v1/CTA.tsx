import Button from "src/components/button"
import CardHover from "src/components/cardHover"
import CTAStyleWrapper from "./CTA.style"

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className='container'>
        <div className='cta-area text-center'>
          <h2 className='title'>
            Apply for project <br />
            incubation
          </h2>
          <div className='dsc'>If you want to launch an IDO, It will be your perfect choice</div>
          <Button
            target='_blank'
            href='https://docs.google.com/forms/d/1mYRmvHN-Btfuavz15mqK4x88z9jGGcgamaakAysbdBQ/viewform?edit_requested=true'
            variant='mint'
            md
          >
            Apply For IDO
          </Button>
          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  )
}

export default CTA
