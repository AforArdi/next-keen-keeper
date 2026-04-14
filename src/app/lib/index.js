import TimelineBtnsProvider from "@/context/TimelineBtnsProvider";

const Providers = ({children}) => {
    return ( 
        <TimelineBtnsProvider>
            {children}
        </TimelineBtnsProvider>
     );
}
 
export default Providers;