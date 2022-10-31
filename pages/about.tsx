import React from 'react';
import { useModuleClassNames} from 'hooks/useClass'
import style from 'styles/modules/blogs.module.scss'
import classNames from 'classnames';
import { Divider } from 'antd';

const About = () => {
    const useClassName = useModuleClassNames(style)

    return (
        <div className="">
            <section className="px-10">
                <h5 className={ classNames("text-slate-500 tracking-widest md:text-center title", useClassName('title'))}>A FEW WORDS ABOUT ME</h5>
                <h3 className='py-2'>Hello world,</h3>
                <h3 className='py-2'>My name is Trường, a Frond End Developer and Designer. I has two years working at FPT Software Company and now I'm working as a freelancer. I specialize in responsive websites and functional user interface. Besides developing websites, I love to enjoy photography and motorcycle adventures.</h3>
                <h3 className='py-2'>This place is where I want to share my knowledge about programming and personal stuffs with everybody. I hope you can finds beneficial something for yourself here, so if you have any questions, don't hesitate to comment in my blogs or reach out me on any of the social medium listed under website. See you all ! </h3>
            </section>
            <Divider/>
            <section className="px-10">
                <h5 className={ classNames("text-slate-500 tracking-widest md:text-center title", useClassName('title'))}>EXPERIENCE</h5>
                <h3 className="py-5">I have had over the past 3 years, as a Front End Developer </h3>
                <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-5">
                        <p>FPT Software</p>
                        <p className="text-stone-400">Front End Developer</p>
                        <p className="text-stone-400">August 2018 - December 2020</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between ">
                        <p>Freelancer</p>
                        <p className="text-stone-400">Front End Developer / Designer</p>
                        <p className="text-stone-400">January 2021 - Present</p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className="px-10">
            <h5 className={ classNames("text-slate-500 tracking-widest md:text-center title", useClassName('title'))}>PROJECTS</h5>
            </section>
        </div>
    );
};

export default About;