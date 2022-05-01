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
                    <BottomButtons left={'/vitrine-app/'} right={'/vitrine-app/project-2'} pageName={"project 1"}/>
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
                <BottomButtons left={'/vitrine-app/project-1'} right={'/vitrine-app/project-3'} pageName={"project 2"}/>
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
                <BottomButtons left={'/vitrine-app/project-2'} right={'/vitrine-app/project-4'} pageName={"project 3"}/>
            </div>
        </main>
    )
}

export const  Project4 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation/>
                <Logo></Logo>
                <Project ProNumber={3}></Project>
                <BottomButtons left={'/vitrine-app/project-3'} right={'/vitrine-app/project-5'} pageName={"project 4"}/>
            </div>
        </main>
    )
}

export const  Project5 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation/>
                <Logo></Logo>
                <Project ProNumber={4}></Project>
                <BottomButtons left={'/vitrine-app/project-4'} right={'/vitrine-app/contact'} pageName={"project 5"}/>
            </div>
        </main>
    )
}