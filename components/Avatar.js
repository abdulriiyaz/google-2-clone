function Avatar({url}) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img loading="lazy" className="h-10 rounded-full cursor-pointer transition duration-150 tranform hover:scale-110  " src={url} alt="profile pic"/>
    )
}

export default Avatar
