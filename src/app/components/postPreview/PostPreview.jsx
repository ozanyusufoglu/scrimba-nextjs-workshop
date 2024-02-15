import Link from "next/link"

export default function PostPreview({ slug, id, title, previewItems }) {

    return <div className="postPreview"
        key={id}>
        <h2>{title}</h2>
        <ul> {
            previewItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))
        }
        </ul>
        <button>
            <Link href={`/posts/${slug}`}>Read more</Link>
        </button>
    </div>
}

