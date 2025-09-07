export default function Background() {
    return (
        < div className="absolute inset-0" >
            < div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce delay-1000" ></div >
            <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/15 rounded-full animate-ping delay-3000"></div>
            <div className="absolute top-60 left-1/3 w-12 h-12 bg-success/20 rotate-12 animate-spin delay-500"></div>
            <div className="absolute bottom-60 right-1/3 w-18 h-18 bg-warning/15 rounded-full animate-bounce delay-1500"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/20 to-warning/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div >
    )
}