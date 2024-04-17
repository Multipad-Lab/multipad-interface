import Button from "src/components/button"
import CardHover from "src/components/cardHover"
import CTAStyleWrapper from "./CTA.style"

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className='container'>
        <div className='cta-area text-center'>
          <h2 className='title'>GET ALERTS 💌 FOR NEW IGOS & IDOS</h2>
          <div className='dsc'>Sign up for newsletter to get more IGO/IDO News and Updates</div>

          <div className='cta_form_box'>
            <input type='email' placeholder='Email Address' />
            <Button
              target='_blank'
              variant='mint'
              md
              href='https://docs.google.com/forms/d/1mYRmvHN-Btfuavz15mqK4x88z9jGGcgamaakAysbdBQ/viewform?edit_requested=true'
            >
              Subscribe
            </Button>
          </div>

          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  )
}

export default CTA
