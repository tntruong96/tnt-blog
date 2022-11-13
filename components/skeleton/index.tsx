import { Skeleton } from "antd"

export const SkeletonComponent = () => {
    return (
        <section>
            <Skeleton active avatar/>
            <Skeleton active avatar/>
        </section>
    )
}