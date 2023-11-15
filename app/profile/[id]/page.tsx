export default function UserProfile({params} :any){
    return(
        <div className="h-screen">
            <h1 className="text-center text-4xl">This is the fucking profile page, what's up{params.id}</h1>
        </div>
    )
}