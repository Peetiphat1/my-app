
type IPdataType = {
    ip : string;
}

type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}


export default async function FetchPage() {
    
    const ipResponse = await fetch('https://dummyjson.com/ip')
    const ipData: IPdataType = await ipResponse.json()

    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allPosts: PostType[] = await postResponse.json()
    
    const posts = allPosts.slice(0, 5)


return (
    <main className="p-6 text-[#41393c] ">
        <h1 className="text-xl font-bold">IP</h1>
        <p className="mb-8">{ipData.ip}</p>

        <h2 className="text-xl font-bold text-black bg">Posts</h2>
        {posts.map(post => (
            <div key={post.id} className="border-b-2 py-2">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.body}</p>
                <div className="mt-2 text-xs text-gray-400">
                    <span className="mr-4">User ID: {post.userId}</span>
                    <span>ID: {post.id}</span>
                </div>
            </div>
        ))}

        

    </main>
)

}