function Project({ image, name, languages, githubPage, githubCode }) {
    return(
        <div>
            <img className="rounded-sm" src={image} alt="my project" />
            <h1>{name}</h1>
            <h1 className="text-gray-400">{languages}</h1>
            <div className="flex justify-between">
                <a className="decoration-3 decoration-green-600 underline" href={githubPage}>VIEW PROJECT</a>
                <a className="decoration-3 decoration-green-600 underline" href={githubCode}>VIEW CODE</a>
            </div>
        </div>
    )
}

export default Project