import React, { useState, useEffect} from 'react';
import {
    ResultProblem,
    ProblemTitle,
    Tag,
    Title,
    SearchButton,
    ResultProblemTitle,
    DirectSearch,
    RelativeKeyword,
    RoadmapButton
} from './style';
import HStack from '../../components/HStack';
import VStack from '../../components/VStack';
import Problem from '../../models/Problem';
import TagModel from '../../models/Tag';

function RelativeKeywordButton({keyword}: {keyword: string}): React.ReactElement {
    return (
        <RelativeKeyword>
            {keyword}
        </RelativeKeyword>
    );
}

function RelativeKeywords({relativeKeywords}: {relativeKeywords: string[]}): React.ReactElement {
    return (
        <VStack style={{height: '240px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
            {relativeKeywords.map((relativeKeyword: string): React.ReactElement => <RelativeKeywordButton keyword={relativeKeyword} /> )}
        </VStack>
    );
}

function ResultProblems({problems}: {problems: Problem[]}): React.ReactElement {
    return (
        <HStack style={{overscrollBehaviorX: 'contain', overflowX: 'scroll', paddingLeft: 'calc(-268.46154px + 28.36538vw + 24px)'}}>
            {problems.map((problem: Problem): React.ReactElement => <ResultProblemButton problem={problem} />)}
        </HStack>
    );
}

function ResultProblemButton({problem}: {problem: Problem}): React.ReactElement {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
          setImageUrl(`https://static.solved.ac/tier_small/${problem.level}.svg`);
      }, [problem]);

    return (
        <ResultProblem>
            <VStack>
                <HStack>
                    <img style={{width: '20px', height: '20px', aspectRatio: '1 / 1'}} alt={problem.titleKo} src={imageUrl}></img>
                    <p style={{marginLeft: '16px'}}>{problem.problemId}</p>
                </HStack>

                <ProblemTitle>{problem.titleKo}</ProblemTitle>
            </VStack>

            <HStack>
                {problem.tags.map((tag: string): React.ReactElement => <Tag>{tag}</Tag>)}
            </HStack>
        </ResultProblem>
    );
}

function ProblemResult(): React.ReactElement {
    const [problems] = useState<Problem[] | null>(null)
    const [relativeKeywords] = useState<string[]>([
        "BFS",
        "그래프",
        "그래프 순회",
        "벡트래킹",
        "다익스트라"
    ])
    const [relativeRoadmaps] = useState<string[]>([
        "우선순위 큐",
        "힙",
        "힙 정렬",
        "합병 정렬과 퀵 정렬",
        "사전",
        "탐색트리",
        "해시 테이블",
        "그래프",
        "그래프 순회",
        "방향 그래프",
        "최소 신장 트리",
        "최단 경로",
        "그래프 응용"
    ])

    return (
        <VStack style={{overflow: 'hidden', paddingTop: '80px'}}>
            <Title>
                <p style={{color: '#C8001E'}}>
                    "깊이 우선 탐색을 배웠어"
                </p>
                에 대한 결과에요.
            </Title>
            <SearchButton>
                검색하러 가기
            </SearchButton>

            <ResultProblemTitle style={{marginLeft: 'calc(-268.46154px + 28.36538vw + 24px)'}}>
                <p style={{color: '#C8001E'}}>DFS</p>
                에 대한 문제를 찾았어요.
            </ResultProblemTitle>

            {problems && <ResultProblems problems={problems} />}

            <HStack style={{marginLeft: 'calc(-268.46154px + 28.36538vw + 24px)'}}>
                <VStack style={{marginRight: '60px'}}>
                    <ResultProblemTitle>
                        <p style={{color: '#C8001E'}}>DFS</p>와 관련있는 주제에요.
                    </ResultProblemTitle>
                    <DirectSearch>
                        바로 검색하기
                    </DirectSearch>
                    <RelativeKeywords relativeKeywords={relativeKeywords} />
                </VStack>

                <VStack>
                    <HStack style={{justifyContent: 'space-between'}}>
                        <ResultProblemTitle>
                            혹시 <p style={{color: '#C8001E'}}>알고리즘</p> 과목을 수강하고 계신가요?
                        </ResultProblemTitle>
                        <RoadmapButton>
                            과목별 로드맵 보러가기
                        </RoadmapButton>
                    </HStack>
                    <DirectSearch>
                        바로 검색하기
                    </DirectSearch>
                    <RelativeKeywords relativeKeywords={relativeRoadmaps} />
                </VStack>
            </HStack>
        </VStack>
    );
}

export default ProblemResult;