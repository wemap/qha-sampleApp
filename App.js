import React, { PureComponent } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import QuelleHistoireAventures from '@wemap/quelle-histoire-aventures-core';
import { theme } from '@wemap/quelle-histoire-aventures-material';

import { gameDataSet } from './src/Constants';

class App extends PureComponent {
    state = {
        openGame: false,
    };

    _onClick = () => {
        this.setState({ openGame: true });
    };

    _onClose = () => {
        this.setState({ openGame: false });
    };

    render() {
        const { openGame } = this.state;

        return (
            <>
                <StatusBar barStyle="dark-content" />
                {openGame ? (
                    <QuelleHistoireAventures
                        gameDataSet={gameDataSet}
                        theme={theme}
                        onGameEnd={() => {}}
                        onGameStart={() => {}}
                        debug
                    />
                ) : (
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: 'grey', padding: 30, borderRadius: 15, width: '50%' }} onPress={this._onClick}>
                                <Text style={{ textAlign: 'center', fontSize: 20 }}>START</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )}
            </>
        );
    }
}

export default App;
