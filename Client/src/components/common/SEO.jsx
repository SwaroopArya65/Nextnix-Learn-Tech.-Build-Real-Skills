import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    keywords = "",
    image = "https://nextnix.netlify.app/logo.svg",
    url = "https://nextnix.netlify.app",
}) {
    return (
        <Helmet prioritizeSeoTags>
            {/* Basic SEO */}
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Arya Swaroop" />
            <meta name="robots" content="index,follow" />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Nextnix" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />

            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:type" content="image/logo+xml" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
                property="og:image:alt"
                content="Nextnix - Learn Tech. Build Real Skills."
            />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Theme */}
            <meta name="theme-color" content="#051D67" />

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