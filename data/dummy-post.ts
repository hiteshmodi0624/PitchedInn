export const dummyPosts: Post[] = [
    {
        id: "post1",
        media: [
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
        ],
        caption: "Beautiful sunset",
        date: "2023-05-15",
        interactions: {
            likes: 10,
            comments: [
                {
                    id: "comment1",
                    userId: "markdavis",
                    content: "Amazing photo!",
                    date: "2023-05-15",
                },
                {
                    id: "comment2",
                    userId: "pqrenterprises",
                    content: "I love sunsets!",
                    date: "2023-05-16",
                },
            ],
            collected: 2,
            saved: 8,
            shared: 3,
        },
        userId: "abccompany",
    },
    {
        id: "post2",
        media: [
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
        ],
        date: "2023-05-14",
        caption: "Delicious food",
        interactions: {
            likes: 15,
            comments: [],
            collected: 1,
            saved: 12,
            shared: 6,
        },
        userId: "abccompany",
    },
    {
        id: "post3",
        media: [
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
        ],
        date: "2023-05-13",
        caption: "Cute pets",
        interactions: {
            likes: 20,
            comments: [
                {
                    id: "abccompany",
                    userId: "user3",
                    content: "Adorable!",
                    date: "2023-05-13",
                },
            ],
            collected: 0,
            saved: 5,
            shared: 2,
        },
        userId: "pqrenterprises",
    },
    {
        id: "post4",
        media: [
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
        ],
        date: "2023-05-12",
        caption: "Beautiful landscape",
        interactions: {
            likes: 8,
            comments: [],
            collected: 1,
            saved: 4,
            shared: 1,
        },
        userId: "pqrenterprises",
    },
    {
        id: "post5",
        media: [
            {
                mediaUrl:"logo.png",
                mediaType: "image",
            },
        ],
        date: "2023-05-11",
        caption: "Artwork",
        interactions: {
            likes: 12,
            comments: [
                {
                    id: "comment4",
                    userId: "pqrenterprises",
                    content: "Great job!",
                    date: "2023-05-11",
                },
                {
                    id: "comment5",
                    userId: "janesmith",
                    content: "I love this artwork!",
                    date: "2023-05-12",
                },
            ],
            collected: 1,
            saved: 10,
            shared: 4,
        },
        userId: "abccompany",
    },
];
