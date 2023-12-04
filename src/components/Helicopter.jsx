import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import City from "./City";
import { Canvas } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger);

export const Model = React.forwardRef((props,ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/helicopter.glb");
  const { actions } = useAnimations(animations, group);
  const tl = useRef();
  const top = useRef();
  const side = useRef();
  const scroll = useScroll();


  useLayoutEffect(() => {

    gsap.to(group.current.position, { y: -3.2, x: 0, duration: 1 });
    gsap.to(group.current.rotation, { y: Math.PI});
    
    gsap.fromTo(top.current.rotation, {y: top.current.rotation},{
      y: -Math.PI * 2,
      repeat: -1,
      ease: "none",
      duration: 3,
    });
    gsap.fromTo(side.current.rotation, {y: top.current.rotation}, {
      y: -Math.PI * 2,
      repeat: -1,
      ease: "none",
      duration: 3,
    });


    gsap.fromTo(group.current.rotation,{y: Math.PI}, { 
          scrollTrigger: { 
          trigger: '#city' ,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
      } ,      
      
      y: Math.PI * 1.5,
      
  }) 
  gsap.fromTo(group.current.rotation,{
    y: Math.PI * 1.5,}, { 
        scrollTrigger: { 
        trigger: '#footer' ,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    } ,
    y: Math.PI * 1.75,
    x: Math.PI * 0.09,
}) 
  gsap.fromTo(group.current.scale,{
    x: 2.3,
    y: 2,
    z: 2.1,}, { 
        scrollTrigger: { 
        trigger: '#footer' ,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    } ,
    x: 2,
}) 


  });

  return (
      <group
        ref={group}
        {...props}
        scale={[2.3,2,2.1]}
        rotation={[0.1, Math.PI, 0]}
        dispose={null}
      >
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-1.571, 0.006, 0.005]}
            scale={0.002}
          >
            <group
              name="6a21b670763d4d868b190f01ed8073aefbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Directional_Light"
                    position={[-200, 200, 200]}
                    rotation={[1.183, -0.361, 0.714]}
                  >
                    <group name="Object_60" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_61" />
                    </group>
                  </group>
                  <group name="Vertolet">
                    <group
                      ref={side}
                      name="vint_m"
                      position={[-587.5, 837.5, -94.5]}
                      rotation={[1.622, 0.265, -1.405]}
                    >
                      <group
                        name="Vint_m"
                        position={[-481.531, -714.086, 560.091]}
                        rotation={[-2.062, -1.17, -2.028]}
                      >
                        <mesh
                          name="Vint_m_glass_flint_heaviest_simplylxp_0"
                          geometry={
                            nodes.Vint_m_glass_flint_heaviest_simplylxp_0
                              .geometry
                          }
                          material={
                            materials["glass_flint_heaviest_simply.lxp"]
                          }
                        />
                        <mesh
                          name="Vint_m_Aluminiumlxp_0"
                          geometry={nodes.Vint_m_Aluminiumlxp_0.geometry}
                          material={materials["Aluminium.lxp"]}
                        />
                        <mesh
                          name="Vint_m_Sery_0"
                          geometry={nodes.Vint_m_Sery_0.geometry}
                          material={materials.Sery}
                        />
                        <mesh
                          name="Vint_m_Default_0"
                          geometry={nodes.Vint_m_Default_0.geometry}
                          material={materials.Default}
                        />
                        <mesh
                          name="Vint_m_Sery2_0"
                          geometry={nodes.Vint_m_Sery2_0.geometry}
                          material={materials.Sery2}
                        />
                        <mesh
                          name="Vint_m_OR_vint1_0"
                          geometry={nodes.Vint_m_OR_vint1_0.geometry}
                          material={materials.OR_vint1}
                        />
                        <mesh
                          name="Vint_m_Bel_vint_0"
                          geometry={nodes.Vint_m_Bel_vint_0.geometry}
                          material={materials.Bel_vint}
                        />
                      </group>
                    </group>
                    <group
                      ref={top}
                      name="Locator"
                      position={[8.6, 1016.6, -50.5]}
                      rotation={[Math.PI, -0.902, -3.072]}
                      scale={0.80}
                    >
                      <group
                        name="Vint_b"
                        position={[-79.584, -1014.821, 50.5]}
                        rotation={[0, 0, -0.07]}
                      >
                        <mesh
                          name="Vint_b_Default_0"
                          geometry={nodes.Vint_b_Default_0.geometry}
                          material={materials.Default}
                        />
                        <mesh
                          name="Vint_b_OR_vint1_0"
                          geometry={nodes.Vint_b_OR_vint1_0.geometry}
                          material={materials.OR_vint1}
                        />
                        <mesh
                          name="Vint_b_Bel_vint_0"
                          geometry={nodes.Vint_b_Bel_vint_0.geometry}
                          material={materials.Bel_vint}
                        />
                        <mesh
                          name="Vint_b_Sery2_0"
                          geometry={nodes.Vint_b_Sery2_0.geometry}
                          material={materials.Sery2}
                        />
                        <mesh
                          name="Vint_b_Sery_0"
                          geometry={nodes.Vint_b_Sery_0.geometry}
                          material={materials.Sery}
                        />
                        <mesh
                          name="Vint_b_Aluminiumlxp_0"
                          geometry={nodes.Vint_b_Aluminiumlxp_0.geometry}
                          material={materials["Aluminium.lxp"]}
                        />
                      </group>
                    </group>
                    <group name="Mesh" />
                    <group
                      name="e344"
                      position={[0, -8.172, 0]}
                      rotation={[0, -0.002, 0]}
                      scale={[36.32, 34.426, 34.426]}
                    >
                      <mesh
                        name="e344_clear_powder_WT_v1_GTRlxp_(4)_0"
                        geometry={
                          nodes["e344_clear_powder_WT_v1_GTRlxp_(4)_0"].geometry
                        }
                        material={materials["clear_powder_WT_v1_GTR.lxp_4"]}
                      />
                      <mesh
                        name="e344_glass_flint_heaviest_simplylxp_0"
                        geometry={
                          nodes.e344_glass_flint_heaviest_simplylxp_0.geometry
                        }
                        material={materials["glass_flint_heaviest_simply.lxp"]}
                      />
                      <mesh
                        name="e344__0"
                        geometry={nodes.e344__0.geometry}
                        material={materials.e344__0}
                      />
                      <mesh
                        name="e344_Aluminiumlxp_0"
                        geometry={nodes.e344_Aluminiumlxp_0.geometry}
                        material={materials["Aluminium.lxp"]}
                      />
                      <mesh
                        name="e344_Default_0"
                        geometry={nodes.e344_Default_0.geometry}
                        material={materials.Default}
                      />
                      <mesh
                        name="e344_clear_powder_coating_black_v2_GTRlxp_0"
                        geometry={
                          nodes.e344_clear_powder_coating_black_v2_GTRlxp_0
                            .geometry
                        }
                        material={
                          materials["clear_powder_coating_black_v2_GTR.lxp"]
                        }
                      />
                      <mesh
                        name="e344_glass_crown_simplylxp_0"
                        geometry={nodes.e344_glass_crown_simplylxp_0.geometry}
                        material={materials["glass_crown_simply.lxp"]}
                      />
                      <mesh
                        name="e344_Amber_LEDlxp_0"
                        geometry={nodes.e344_Amber_LEDlxp_0.geometry}
                        material={materials["Amber_LED.lxp"]}
                      />
                      <mesh
                        name="e344_White_LEDlxp_0"
                        geometry={nodes.e344_White_LEDlxp_0.geometry}
                        material={materials["White_LED.lxp"]}
                      />
                      <mesh
                        name="e344_Sery_0"
                        geometry={nodes.e344_Sery_0.geometry}
                        material={materials.Sery}
                      />
                      <mesh
                        name="e344_glass_flint_medium_simply2lxp_0"
                        geometry={
                          nodes.e344_glass_flint_medium_simply2lxp_0.geometry
                        }
                        material={materials["glass_flint_medium_simply2.lxp"]}
                      />
                      <mesh
                        name="e344_OR_vint1_0"
                        geometry={nodes.e344_OR_vint1_0.geometry}
                        material={materials.OR_vint1}
                      />
                      <mesh
                        name="e344_Red_LEDlxp_0"
                        geometry={nodes.e344_Red_LEDlxp_0.geometry}
                        material={materials["Red_LED.lxp"]}
                      />
                      <mesh
                        name="e344_Yellow_LEDlxp_0"
                        geometry={nodes.e344_Yellow_LEDlxp_0.geometry}
                        material={materials["Yellow_LED.lxp"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Camera"
                    position={[1070.277, 142.652, -2046.488]}
                    rotation={[2.929, -1.111, -2.981]}
                  >
                    <group name="Object_39" />
                  </group>
                  <group name="Texture_Group">
                    <group name="Cast_Tungstenlxp" />
                    <group name="Burnished_Tungstenlxp" />
                    <group name="clear_powder_coating_black_v2_GTRlxp_(4)" />
                    <group name="clear_powder_coating_black_v2_GTRlxp" />
                    <group name="clear_powder_coating_black_v1_GTRlxp_(3)" />
                    <group name="vein_powder_coating_white_v1_GTRlxp_(5)" />
                  </group>
                  <group name="Light_Box_Studio_01lxe">
                    <group name="Texture_Group_(2)" />
                  </group>
                  <group name="Noise_Black_Ground_01lxe">
                    <group name="Texture_Group_(3)" />
                  </group>
                  <group name="Black_Studio_01lxe">
                    <group name="Texture_Group_(4)" />
                  </group>
                  <group name="Alley_Probe_01lxe">
                    <group name="Texture_Group_(5)" />
                  </group>
                  <group name="Clamped_Physical_Sunlxe">
                    <group
                      name="Physical_Sun"
                      position={[-200, 200, 200]}
                      rotation={[1.183, -0.361, 0.714]}
                    >
                      <group name="Object_57" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_58" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    // </Canvas>
    // </div>
  );
})
// export const exoGroup = React.forwardRef(group)
useGLTF.preload("/helicopter.glb");
