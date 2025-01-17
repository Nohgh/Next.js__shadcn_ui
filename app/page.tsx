"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";

const Home = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.container__onBoarding}>
        <span className={styles.container__onBoarding__title}>
          How to Start:
        </span>
        <div className={styles.container__onBoarding__steps}>
          <span>1. Create a page</span>
          <span>2. Add boards to page</span>
        </div>
        {/* 페이지 추가 버튼 shardcn ui 사용 / npx shadcn@latest add button */}
        <Button
          variant={"outline"}
          className="w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500"
          onClick={() => router.push("/create")}
          // ssr이기 때문에 클릭이벤트와 같은 이벤트를 감지하기 어렵다. => use client명시
        >
          Add New Page
        </Button>
      </div>
    </div>
  );
};

export default Home;
