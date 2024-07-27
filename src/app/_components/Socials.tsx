import { faFacebook, faGithub, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

const socials = [
    { name: 'Github', icon: faGithub, link: 'https://github.com/dedyrahmat' },
    { name: 'Linkedin', icon: faLinkedin, link: 'https://github.com/dedyrahmat' },
    { name: 'Email', icon: faEnvelope, link: 'mailto:acesonix@gmail.com' },
    { name: 'Facebook', icon: faFacebook, link: 'https://facebook.com/DedyRahmat01' },
    { name: 'Twitter / X', icon: faXTwitter, link: 'https://github.com/dedyrahmat' },
    { name: 'Instagram', icon: faInstagram, link: 'https://github.com/dedyrahmat' },
]

export default function Socials({ className }: { className: string | undefined }) {
    return (
        <div className={`${className}`} >
            <h3 className='font-bold text-xl mb-4'>Socials</h3>
            <div className="grid grid-cols-3 items-center justify-center gap-4">
                {socials.map(({ name, icon, link }, index) => (
                    <a
                        key={index}
                        className="px-3 py-1 border-black border-2 rounded-md hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white transition-all items-center justify-center md:justify-start flex"
                        href={link}
                        target="_blank"
                        rel="noreferrer" >
                        <FontAwesomeIcon icon={icon} className="size-8 text-black bg-white p-2" />
                        <p className="text-center hidden md:block">{name}</p>
                    </a>
                ))}
            </div>
        </div >
    )
}
