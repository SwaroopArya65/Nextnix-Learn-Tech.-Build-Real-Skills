import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    keywords,
    image = "/logo.png",
    url = "https://nextnix.netlify.app",
}) {
    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="author"
                content="Arya Swaroop"
            />

            <meta
                name="robots"
                content="index, follow"
            />

            {/* Open Graph */}

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:site_name"
                content="Nextnix"
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:url"
                content={url}
            />

            {/* Twitter */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

            {/* Theme */}

            <meta
                name="theme-color"
                content="#051D67"
            />

            {/* Security */}

            <meta
                httpEquiv="Referrer-Policy"
                content="strict-origin-when-cross-origin"
            />

            <meta
                httpEquiv="Permissions-Policy"
                content="camera=(), microphone=(), geolocation=()"
            />
        </Helmet>
    );
}