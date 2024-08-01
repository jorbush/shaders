#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 st, vec2 center, float radius) {
    return length(st - center) - radius;
}

float rectangle(vec2 st, vec2 center, vec2 size) {
    vec2 d = abs(st - center) - size;
    return max(d.x, d.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec2 center = vec2(0.5) + vec2(0.2 * cos(u_time), 0.2 * sin(u_time));
    float radius = 0.2;

    float d = length(st - center);
    vec3 color = vec3(0.0);


    if (d < radius) {
        color = vec3(st.x,st.y,abs(sin(u_time)));
    }

    gl_FragColor = vec4(color,1.0);
}
