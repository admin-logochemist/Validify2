import React from 'react'
import '../css/About.css'

const Aboutcontent = () => {
  return (
    <div> 
        <div className="container-fluid">
            <div className="row about-row side">
                <div className="col-lg-6 own_col">
                    <h1 className='heading mt-5'>About</h1>
                    <p className='para'>Dictionary.com is the world’s leading digital dictionary. We provide millions of English definitions, spellings, audio pronunciations, example sentences, and word origins. Dictionary.com’s main, proprietary source is the Random House Unabridged Dictionary, which is continually updated by our team of experienced lexicographers and supplemented with trusted, established sources including American Heritage and Harper Collins to support a range of language needs. Dictionary.com also offers a translation service, a Word of the Day, a crossword solver, and a wealth of editorial content that benefit the advanced word lover and the English language student alike.</p>
                </div>
                <div className="col-lg-6 right-side own_col"></div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent