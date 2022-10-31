import { useCallback } from "react"

export const useModuleClassNames = (styles: any) => {
    return useCallback((classNames: string) => {
        if( typeof styles !== 'object'){
            return ""
        }
        const classNamesParts = classNames.split('\\s');
        return classNamesParts.reduce((str, name) => {
            return `${str} ${styles[name]}`
        }, '')
    }, [styles])
}