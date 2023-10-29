import {
  Canvas,
  Paint,
  Path,
  Skia,
  SweepGradient,
  useTiming,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  const size = 300;
  const strokeWidth = 15;
  const path = Skia.Path.Make();
  path.addArc({x: 50, y: 50, width: size, height: size}, 0, 360);
  const red = '#ff0000';
  const blue = '#006eff';

  const start = useTiming(
    {
      from: 1,
      to: 0,
      loop: true,
      yoyo: true,
    },
    {duration: 1200},
  );

  const end = useTiming(
    {
      from: 0,
      to: 1,
      yoyo: true,
      loop: true,
    },
    {duration: 1200},
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <Path path={path} color="transparent" end={end} start={start}>
          <Paint style="stroke" strokeWidth={11} strokeCap={'round'}>
            <SweepGradient
              c={vec(size / 2, size / 2 + strokeWidth)}
              colors={[blue, red, blue]}
              start={0}
              end={360}
            />
          </Paint>
        </Path>
      </Canvas>
    </SafeAreaView>
  );
}

export default App;
