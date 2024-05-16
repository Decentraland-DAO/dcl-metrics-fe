import { Center } from "@chakra-ui/react"
import { getPosts } from "../../markdown/helpers/post"
import Layout from "../../src/components/layout/layout"
import PostList from "../../src/components/blog/PostList"
import { getUnixTime, parseISO } from "date-fns"
import { generateMetaData, siteUrl } from "../../src/lib/data/metadata"
import { NextSeo } from "next-seo"

export const getStaticProps = () => {
  const posts = getPosts()

  posts.sort((a, b) => {
    return (
      getUnixTime(parseISO(b.data.date)) - getUnixTime(parseISO(a.data.date))
    )
  })

  return {
    props: {
      posts,
    },
  }
}

const BlogPage = ({ posts }) => {
  const pageTitle = "DCL-Metrics Blog"
  const description =
    "Your hub for insightful articles, guides, and updates on the latest happenings in the DCL-Metrics."
  const image = `${siteUrl}/images/blog.png`

  const metaData = generateMetaData({
    title: pageTitle,
    description: description,
    image: image,
  })

  return (
    <>
      <NextSeo
        title={metaData.title}
        description={metaData.description}
        openGraph={{
          url: siteUrl + "/blog",
          title: metaData.title,
          description: metaData.description,
          images: [
            {
              url: metaData.image,
              width: 400,
              height: 400,
              alt: metaData.description,
              type: "image/png",
            },
          ],
          siteName: "DCL-Metrics",
        }}
      />
      <Layout>
        <Center w="100%">
          <PostList posts={posts} />
        </Center>
      </Layout>
    </>
  )
}

export default BlogPage
