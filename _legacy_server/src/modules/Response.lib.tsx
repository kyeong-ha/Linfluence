export const Message = {
    NULL_VALUE: '존재하지 않는 값',
    NOT_FOUND: '존재하지 않는 자원',
    BAD_REQUEST: '잘못된 요청',
    INTERNAL_SERVER_ERROR: '서버 내부 오류',

    READ_INFLUENCER_SUCCESS: '인플루언서 조회 성공',
    CREATE_INFLUENCER_SUCCESS: '인플루언서 생성 성공',
    DELETE_INFLUENCER_SUCCESS: '인플루언서 삭제 성공',
    UPDATE_INFLUENCER_SUCCESS: '인플루언서 수정 성공',
}

export const StatusCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    DB_ERROR: 600,
}