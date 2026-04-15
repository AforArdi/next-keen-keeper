import Link from "next/link";

const NotFoundPage = () => {
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-5">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
                
                <div className="mt-4">
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        Oops! Page not found
                    </h2>
                    <p className="mt-4 text-base-content/70">
                        The page you are looking for might have been removed, 
                        had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="mt-10">
                    <Link href={'/'} className="btn bg-[#244D3F] text-white px-8">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>    
     );
}
 
export default NotFoundPage;