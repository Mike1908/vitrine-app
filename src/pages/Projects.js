import React from 'react'
import BottomButtons from '../components/BottomButtons'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Project from '../components/Project'

/**
 * @returns les pages de chaque project
 */
export const  Project1 = () =>{
        return (
            <main>
                <div className="project">
                    <Navigation/>
                    <Logo></Logo>
                    <Project ProNumber={0}></Project>
                    <BottomButtons left={'/'} right={'/project-2'} />
                </div>
            </main>
        )
}

export const  Project2 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation/>
                <Logo></Logo>
                <Project ProNumber={1}></Project>
                <BottomButtons left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}

export const  Project3 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation/>
                <Logo></Logo>
                <Project ProNumber={2}></Project>
                <BottomButtons left={'/project-2'} right={'/contact'} />
            </div>
        </main>
    )
}