import * as React from 'react';
import { ActionTypes } from './ActionTypes';
import { LayoutState } from './LayoutState';

type Dispatch = (action: ActionTypes) => void
type CountProviderProps = { children: React.ReactNode }

const LayoutStateContext = React.createContext<LayoutState | undefined>(undefined)
const LayoutDispatchContext = React.createContext<Dispatch | undefined>(
    undefined,
)

function LayoutReducer(state: LayoutState, action: ActionTypes): LayoutState {
    switch (action) {
        case "SHOW_SEARCH_BAR": {
            return { IsShowSearchBar: true }
        }
        case "HIDE_SEARCH_BAR": {
            return { IsShowSearchBar: false }
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`)
        }
    }
}

function LayoutProvider({ children }: CountProviderProps) {
    const [state, dispatch] = React.useReducer(LayoutReducer, { IsShowSearchBar: false });

    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                {children}
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    )
}

function useLayoutState() {
    const context = React.useContext(LayoutStateContext)
    if (context === undefined) {
        throw new Error('useLayoutState must be used within a LayoutProvider')
    }
    return context
}
function useLayoutDispatch() {
    const context = React.useContext(LayoutDispatchContext)
    if (context === undefined) {
        throw new Error('useLayoutDispatch must be used within a LayoutProvider')
    }
    return context
}
export { LayoutProvider, useLayoutState, useLayoutDispatch }