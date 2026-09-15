import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExpertiseItem = ({itemdata}) => {
  return (
    <div className="item">
                    <div className="project-item mb-5">
                        <div className="position-relative">
                            <Image
                            width={550}
                            height={400}
                             className="img-fluid" 
                             src={itemdata.image} 
                             alt={itemdata.title}/>
                            <div className="project-overlay">
                                <Link className="btn btn-lg-square btn-light rounded-circle m-1" href={itemdata.image}
                                    data-lightbox="project"><i className="fa fa-eye"></i></Link>
                                <Link className="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                        className="fa fa-link"></i></Link>
                            </div>
                        </div>
                        <div className="p-4">
                            <Link className="d-block h5" href=""> {itemdata.title}</Link>
                            <span>SEO </span>
                        </div>
    
    
                    </div>
                </div>
  )
}

export default ExpertiseItem
