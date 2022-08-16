function connectedVertices(edges) {
    // TODO: 여기에 코드를 작성합니다.
      const maxVertex = edges.reduce((a, c) => {
            const bigger = Math.max(...c);
            if (bigger > a) return bigger;
            return a;
        }, 0);
    
        // 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
        const adjList = []
    
      // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
        for (let i = 0; i <= maxVertex; i++) {
            adjList[i] = [];
        }
    
      // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
        // 이렇게 adjList 그래프가 완성되었습니다.
        for (let i = 0; i < edges.length; i++) {
            adjList[edges[i][0]].push(edges[i][1]);
            adjList[edges[i][1]].push(edges[i][0]);
        }
      let visited = new Array(maxVertex+1).fill(false)
      let count = 0
    
      for(let i=0;i<visited.length;i++){
        if(visited[i]===false){
          bfs(adjList,i,visited)
          count++
        }
      }
      return count
    }
    
    function bfs(graph,node,visited){
      let q = [node]
      visited[node]=true
      while(q.length>0){
        let cur = q.shift()
        for(let i=0;i<graph[cur].length;i++){
          if(!visited[graph[cur][i]]){
            q.push(graph[cur][i])
            visited[graph[cur][i]]=true
          }
        }
      }
    }