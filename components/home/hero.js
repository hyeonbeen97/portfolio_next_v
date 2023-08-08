import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 ml-28 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 leading-1">
          안녕하세요
          <br className="hidden lg:inline-block " />
          신입 프론트엔드 개발자 김현빈입니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          저는 무엇이든지 노력하고 즐기면 그 결과는 빛을 발한다고 믿습니다.
          이렇게 열정과 도전정신을 가지고 있는 신입 프론트앤드 엔지니어로서, 제
          목표는 항상 배움에 겸손함을 유지하면서 세부적인 부분까지 파고들며
          전문성을 향상시키는 것입니다. 제 목표는 프론트앤드 개발자로서 저만의
          독특한 아이덴티티를 만들고, 사용자들에게 진정으로 가치 있는 경험을
          제공하는 것입니다. 노력과 열정을 바탕으로 발전하며, 주어진 기회를
          최대한 활용하여 성장하고 싶습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
