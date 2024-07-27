interface Experience {
    position: string;
    employment_type: string;
    company_name: string;
    location: string;
    date: string;
    description: string;
}
const experience = [
    {
        position: 'Mobile Developer',
        employment_type: 'Full-time',
        company_name: 'Weekend, Inc.',
        location: 'Jakarta, Indonesia • Remote',
        date: 'Aug 2021 - Present',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non deleniti perspiciatis sed? Perspiciatis necessitatibus sapiente molestias similique ipsum voluptate iure nostrum rerum doloribus possimus, quod aspernatur molestiae velit delectus?',
    },
    {
        position: 'Frontend Developer',
        employment_type: 'Contract',
        company_name: 'Realtegic Korporindo Investama',
        location: 'Jakarta, Indonesia',
        date: 'Feb 2021 - Apr 2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non deleniti perspiciatis sed? Perspiciatis necessitatibus sapiente molestias similique ipsum voluptate iure nostrum rerum doloribus possimus, quod aspernatur molestiae velit delectus?',
    },
    {
        position: 'Frontend Developer',
        employment_type: 'Contract',
        company_name: 'PT. Tanijoy Agriteknologi Nusantara',
        location: 'Jakarta, Indonesia',
        date: 'Dec 2019 - Jan 2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non deleniti perspiciatis sed? Perspiciatis necessitatibus sapiente molestias similique ipsum voluptate iure nostrum rerum doloribus possimus, quod aspernatur molestiae velit delectus?',
    },
    {
        position: 'Software Engineer',
        employment_type: 'Full-time',
        company_name: 'Gandsoft',
        location: 'Jakarta, Indonesia',
        date: 'Jan 2019 - Nov 2019',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non deleniti perspiciatis sed? Perspiciatis necessitatibus sapiente molestias similique ipsum voluptate iure nostrum rerum doloribus possimus, quod aspernatur molestiae velit delectus?',
    },
    {
        position: 'Junior Full-stack Developer',
        employment_type: 'Contract',
        company_name: 'PT. Bentang MirtaGuna',
        location: 'Jakarta, Indonesia',
        date: 'Aug 2017 - Jan 2019',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non deleniti perspiciatis sed? Perspiciatis necessitatibus sapiente molestias similique ipsum voluptate iure nostrum rerum doloribus possimus, quod aspernatur molestiae velit delectus?',
    },
]

async function getPublicRepos(): Promise<Experience[]> {
    const res = await fetch('https://gist.githubusercontent.com/dedyrahmat/0885420d9bf7b1b6e8c46ec4a05a6cd6/raw/f19b9257d9a71fcefc6973655b18c323092a41db/work_experiences.json',
        {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.error(await res.json());
        // return;
    }
    const parsed: Experience[] = JSON.parse(JSON.stringify(await res.text()))
    return parsed
}

export default async function Experience() {
    const data: Experience[] = await getPublicRepos()
    console.log(typeof data)
    return (
        <div className="py-16">
            <h2 className="text-2xl font-bold">Experience</h2>
            {/* <!-- component --> */}
            <section className=" flex flex-col justify-center overflow-hidden">
                <div className="w-full ">
                    <div className="flex flex-col justify-center divide-y divide-black [&>*]:py-8">
                        {/* <!-- Vertical Timeline #1 --> */}
                        <div className="-my-6">
                            {experience.map((exp: Experience, index: number) => (
                                <div key={index} className="relative pl-8 py-6 group">
                                    {/* <!-- Purple label --> */}
                                    <div className="font-medium text-sm text-neutral-500 mb-1 sm:mb-0">{exp.location}</div>
                                    {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                                    <div className="flex flex-col sm:flex-row items-start my-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[0.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <div className="text-2xl font-bold text-slate-900">{exp.company_name}</div>
                                    </div>
                                    <p className="font-semibold text-gray-700 uppercase mb-3 sm:mb-0 border-black rounded-full">{exp.position}</p>
                                    <time className="text-xs text-slate-600 font-semibold capitalize my-3 sm:my-0 border-black rounded-full py-2">{exp.date}</time>
                                    {/* <!-- Content --> */}
                                    <div className="text-slate-800 mt-3 text-justify text-sm">{exp.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
