import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from 'react-icons/fa6';
import { renderContentWithHighlight } from '../helper/rendeContentWithHighlight';

export default function DetailsBlogPage() {
    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const params = useParams();

    const getDetailsBlog = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/GetDetail/${params.id}`);
            setBlog(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`);
            setBlogs(response.data.blogs);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getDetailsBlog();
        getBlogs();
    }, [params.id]);

    const socialIcons = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/efb413c5cc5cc81ae2410fcc315d9f99e09ab33b66c57e0b8a3b0713329fe728?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on Twitter',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df88d6b6d7c94c6b0c317f7174c5c8b74983d6f34a41006fc4881c62d238f1e0?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on LinkedIn',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c30d952a307166fe1ebde256f8da6330e4d0b6d1b96b2ade79bddd774fafe04b?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on Facebook',
        },
    ];

    const sections = [
        'Exploring Generative AI in Content Creation',
        'Steering Clear of Common AI Writing Pitfalls',
        'Understanding ChatGPT Capabilities - Define Your Style',
        'Understand Your Readers',
        'Creating Quality AI-powered Blogs that Stand Out',
        'Conclusion: Embracing AI in Blog Creation',
        'Afterword: The AI Behind This Article',
    ];

    const blogSections = [
        {
            title: 'Exploring Generative AI in Content Creation',
            content: [
                'Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share from my firsthand experience.',
                'Google encourages high-quality blogs regardless of whether they\'re written by humans or created using artificial intelligence like ChatGPT. Here\'s what matters: producing original material with expertise and trustworthiness based on Google E-E-A-T principles.',
                'This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search rankings. There comes a time when many experienced professionals want to communicate their insights but get stuck due to limited writing skills – that\'s where Generative AI can step in.',
                'So, together, we\'re going explore how this technology could help us deliver valuable content without sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert – common pitfalls!). Hang tight - it\'ll be a fun learning journey!',
            ],
        },
        {
            title: 'Steering Clear of Common AI Writing Pitfalls',
            content: [
                'Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results. One common pitfall I\'ve seen is people opting for quantity over quality - they churn out blogs, but each one feels robotic and soulless, reading just like countless others on the internet.',
                'Another fault line lies in creating reproductions rather than delivering unique perspectives that offer value to readers; it often happens if you let an AI tool write your full blog unrestrained! Trust me on this – Ask any experienced marketer or writer about their takeaways from using generative AI tools. They\'ll all agree that adding a human touch and following specific guidelines are key when implementing these tech pieces.',
                'Remember, our goal here isn\'t merely satisfying search engines but, more importantly, knowledge-hungry humans seeking reliable information online. So keep your audience\'s needs at heart while leveraging technology\'s assistance!',
            ],
        },
        {
            title: 'Understanding ChatGPT Capabilities - Define Your Style',
            content: [
                'Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be mind-boggling. I have learned from experience how capable it is in dealing with diverse content generation tasks, only that its text sounded slightly "unnatural" in accordance with TechTarget. However, fear not – there are ways around this!',
                'One strategic move I\'ve seen work wonders is defining your unique writing style first before handing over the reins to AI; you treat it like a canvas whereupon our vision opens up. If we clearly instruct who we\'re targeting or what tone resonates more effectively, generative AI tools such as ChatGPT will comply remarkably well.',
                'In framing guidelines, remember to keep audience interests at heart while adopting technology\'s benefits for efficient output – trust me on this because neglecting these aspects could backfire by generating unappealing robotic-like reads.',
                'Ultimately, aiming towards reader-focused driven creativity illuminated under authentically humanized narratives holds priority above all else when crafting blogs using auto-generation toolkits!',
            ],
        },
    ];

    return (
        <div
            className="flex flex-col items-start self-center mt-12 max-md:mt-10 md:px-8 lg:px-0 lg:mx-32">
            <div className="self-stretch mt-2 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div
                            className="flex overflow-hidden flex-col grow w-full rounded-xl bg-zinc-900 max-md:mt-8 max-md:max-w-full">
                            <div className="flex relative flex-col pt-9 w-full min-h-[350px] max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}/${blog?.img}`}
                                    alt="Main article featured image"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <div
                                    className="flex relative z-10 shrink-0 mb-0 h-[428px] max-md:mb-2.5 max-md:max-w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-8">
                            {/*<AuthorCard />*/}
                            <div
                                className="flex overflow-hidden flex-col items-center bg-slate-100 rounded-xl">
                                <div className="flex relative flex-col p-5 w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0143b2936edf67984ba985e0f0e6f98bb5d5078c4f1ef30cde00bd33dcfa6cf8?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead"
                                        alt=""
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="flex relative gap-5 self-start">
                                        <img
                                            loading="lazy"
                                            src="/logo.png"
                                            alt="Tác giả"
                                            className="object-contain shrink-0 max-w-full w-[100px]"
                                        />
                                    </div>
                                    <div className="flex relative flex-col mt-5 text-sky-600">
                                        <div className="flex flex-col max-w-full w-[301px]">
                                            <div className="text-xl font-semibold">Medlab Vĩnh Viễn</div>
                                        </div>
                                        <div
                                            className="mt-2.5 max-w-full bg-white border border-white border-solid opacity-20 min-h-[1px] w-[301px]" />
                                    </div>
                                </div>
                            </div>
                            {/*<ShareSection />*/}
                            <div className="flex overflow-hidden flex-col mt-8 bg-blue-900 rounded-xl">
                                <div
                                    className="flex relative flex-col justify-center items-start p-5 aspect-[3.444] w-[341px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2419c1e6dd47c58fc718781639dcd314498a76d021a9ad3bdc2c3a23e8a7191e?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead"
                                        alt=""
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="flex relative flex-col">
                                        <div className="text-base font-semibold text-white font-sans">
                                            Chia sẻ đến mạng xã hội của bạn
                                        </div>
                                        <div className="flex gap-5 items-start self-start mt-2.5">
                                            {socialIcons.map((icon, index) => (
                                                <button
                                                    key={index}
                                                    tabIndex={0}
                                                    aria-label={icon.alt}
                                                    className="focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={icon.src}
                                                        alt={icon.alt}
                                                        className="object-contain shrink-0 aspect-square w-[30px]"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <h1 className="text-xl font-medium">{blog?.title}</h1>
                        <p className="text-lg font-light text-slate-800 mt-4">
                            {renderContentWithHighlight(blog?.content)}
                        </p>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        {/*<TableOfContents />*/}
                        <div className="flex flex-col text-zinc-900 max-md:mt-8">
                            <div className="text-xl font-semibold">Các bài viết liên quan</div>
                            <div className="flex flex-col gap-6 mt-5 w-full text-base max-w-[341px]">
                                {blogs && blogs.length > 0 && (
                                    blogs.map((blog, index) => (
                                        <Link to={`/blog/${blog.id}`} key={index}
                                              className="blog-item flex flex-col gap-2">
                                            <div className="flex flex-col gap-1">
                                                <div
                                                    className="px-2 py-1 bg-yellow-500 text-white text-[10px] rounded-lg w-fit"
                                                >
                                                    {blog.category}
                                                </div>
                                                <div className="grid grid-cols-5">
                                                    <h3 className="text-slate-800 col-span-4 hover:text-sky-600 duration-200">
                                                        {blog.title}
                                                    </h3>
                                                    <span className="flex justify-end">
                                                <FaArrowRightLong className="text-slate-600 text-right" />
                                            </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-7 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[693px]" />
        </div>
    );
}